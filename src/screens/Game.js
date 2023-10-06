import React, { useCallback, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useGame } from "../provider/GameProvider";

import Wrapper from "../components/layout/Wrapper";

import Challenge from "../components/Challenge";
// import AdPenalty from "../components/AdPenalty";

const Game = () => {
  const navigation = useNavigation();

  const [player, setPlayer] = useState(undefined);
  const [challenge, setChallenge] = useState(undefined);

  const { getTurn, onNextTurn, onReset } = useGame();

  useEffect(() => {
    getNewTurn();
  }, []);

  const onIncrease = useCallback(() => {
    onNextTurn(player, challenge, "increase");
    getNewTurn();
  }, [player, challenge]);

  const onDecrease = useCallback(() => {
    onNextTurn(player, challenge, "decrease");
    getNewTurn();
  }, [player, challenge]);

  const getNewTurn = () => {
    const newTurn = getTurn(player, challenge);
    setPlayer(newTurn.player);
    setChallenge(newTurn.challenge);
  };

  const onSuccess = useCallback(() => {
    console.log("Fin de publicidad");
  }, []);

  const goBack = useCallback(() => {
    onReset();
    navigation.popToTop();
  }, []);

  // console.log(challenge, player);

  return (
    <Wrapper goBack={goBack}>
      <Challenge
        onSuccess={onSuccess}
        player={player || "tu mamita"}
        challenge={challenge?.content || "cargando..."}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />
    </Wrapper>
  );
};

export default Game;
