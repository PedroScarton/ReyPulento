import React, {
  createContext,
  useCallback,
  useContext,
  useReducer,
  useMemo,
} from "react";

import { dummyChallenges } from "../constants/dummy-data";

// GAME ACTIONS
const RESET_GAME = "RESET_GAME";
const START_GAME = "START_GAME";
// TURN ACTIONS
const NEXT_TURN = "NEXT_TURN";
const UPDATE_AD_STATE = "UPDATE_AD_STATE";

const GameContext = createContext({
  // States
  players: [],
  challenges: [],
  turns: [],
  lastAdPlayer: undefined,
  lastAdTime: new Date().getTime(),
  // Handlers
  onStart: (players) => {},
  onReset: () => {},
  onNextTurn: (player, challenge, action) => {},
  getTurn: (prevPlayer, prevChallenge) => {},
});

function reducer(state, action) {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        players: action.players,
        challenges: action.challenges,
        turns: [],
      };
    case NEXT_TURN:
      return { ...state, turns: [...state.turns, action.turn] };
    case RESET_GAME:
      return { players: [], challenges: [], turns: [] };
    case UPDATE_AD_STATE:
      return {
        ...state,
        lastAdPlayer: action.adPlayer,
        lastAdTime: action.adTime,
      };
  }
}

export default function GameProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    players: [],
    challenges: [...dummyChallenges],
    turns: [],
    lastAdPlayer: undefined,
    lastAdTime: new Date(),
  });

  const onStart = useCallback((players) => {
    // Fetch Challenges
    const challenges = [];
    dispatch({ type: START_GAME, players, challenges: dummyChallenges });
  }, []);

  const onReset = useCallback(() => {
    // Save the session for next games
    dispatch({ type: RESET_GAME });
  }, []);

  const onNextTurn = useCallback((player, challenge, action) => {
    // acton: Increase -> change the user configuration
    // acton: Decrease -> change the user configuration
    dispatch({ type: NEXT_TURN, turn: { player, challenge, action } });
  }, []);

  const getTurn = useCallback(
    (prevPlayer, prevChallenge) => {
      if (shouldShowAd()) {
        const adPlayer = getRandomAdPlayer(prevPlayer);
        dispatch({
          type: UPDATE_AD_STATE,
          adUser: adPlayer,
          adTime: new Date().getTime(),
        });
        return { player: adPlayer, ad: true };
      }

      const nextPlayer = getNextPlayer(prevPlayer);
      const nextChallenge = getNextChallenge(nextPlayer, prevChallenge);

      return { player: nextPlayer, challenge: nextChallenge };
    },
    [
      state.challenges,
      state.players,
      state.turns,
      state.lastAdUser,
      state.lastAdTime,
    ]
  );

  const shouldShowAd = () => {
    const fiveMinutes = 5 * 60 * 1000;
    if (new Date().getTime() - state.lastAdTime >= fiveMinutes) {
      return true;
    }
    return false;
  };

  const getNextPlayer = (current) => {
    if (current === undefined) return state.players[0];
    const currentIndex = state.players.indexOf(current);

    if (currentIndex === state.players.length - 1) {
      return state.players[0];
    } else {
      return state.players[currentIndex + 1];
    }
  };

  const getRandomAdPlayer = (currentPlayer) => {
    let availablePlayers = state.players.filter(
      (p) => p !== currentPlayer && p !== state.lastAdUser
    );
    const randomIndex = Math.floor(Math.random() * availablePlayers.length);
    return availablePlayers[randomIndex];
  };

  const getNextChallenge = (player, prevChallenge) => {
    let filteredChallenges = prevChallenge
      ? state.challenges.filter(
          (challenge) => challenge.id !== prevChallenge.id
        )
      : state.challenges;

    const randomIndex = Math.floor(Math.random() * filteredChallenges.length);

    return filteredChallenges[randomIndex];
  };

  const gameContext = useMemo(
    () => ({
      // States
      ...state,
      // game Handlers
      onStart,
      onReset,
      onNextTurn,
      getTurn,
    }),
    [state.players, state.challenges, state.turns]
  );

  return (
    <GameContext.Provider value={gameContext}>{children}</GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}
