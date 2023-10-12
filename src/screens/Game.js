import React, { useCallback, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useGame } from "../provider/GameProvider";

import Wrapper from "../components/layout/Wrapper";

import Challenge from "../components/Challenge";
import AdPenalty from "../components/AdPenalty";

const Game = () => {
  const navigation = useNavigation();

  const [player, setPlayer] = useState(undefined);
  const [challenge, setChallenge] = useState(undefined);
  const [adPenalty, setAdPenalty] = useState(false);

  const { getTurn, onNextTurn, onReset } = useGame();

  useEffect(() => {
    getNewTurn();
  }, []);

  const onIncrease = useCallback(() => {
    onNextTurn(player, challenge, "increase");
    getNewTurn();
  }, [player, challenge, getNewTurn]);

  const onDecrease = useCallback(() => {
    onNextTurn(player, challenge, "decrease");
    getNewTurn();
  }, [player, challenge, getNewTurn]);

  const getNewTurn = useCallback(() => {
    const newTurn = getTurn(player, challenge);
    setPlayer(newTurn.player);
    newTurn.ad ? setAdPenalty(true) : setChallenge(newTurn.challenge);
  }, [player, challenge, adPenalty, getTurn]);

  const onSuccess = useCallback(() => {
    setAdPenalty(false);
    getNewTurn();
  }, [getNewTurn]);

  const goBack = useCallback(() => {
    onReset();
    navigation.popToTop();
  }, [onReset, navigation]);

  // console.log(challenge, player);

  return (
    <Wrapper goBack={goBack}>
      {adPenalty ? (
        <AdPenalty player={player || "tu mamita"} onSuccess={onSuccess} />
      ) : (
        <Challenge
          onSuccess={onSuccess}
          player={player || "tu mamita"}
          challenge={challenge?.content || "cargando..."}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
      )}
    </Wrapper>
  );
};

export default Game;
