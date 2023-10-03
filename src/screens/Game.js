import React, { useCallback } from "react";

import Wrapper from "../components/layout/Wrapper";

import Challenge from "../components/Challenge";
import AdPenalty from "../components/AdPenalty";

const Game = () => {
  const onIncrease = useCallback(() => {
    console.log("facilito");
  }, []);
  const onDecrease = useCallback(() => {
    console.log("ni cagando");
  }, []);
  const onSuccess = useCallback(() => {
    console.log("ni cagando");
  }, []);
  const goBack = useCallback(() => {
    console.log("inicio");
  }, []);
  return (
    <Wrapper goBack={goBack}>
      <AdPenalty onSuccess={onSuccess} player={"player"} />
    </Wrapper>
  );
};

export default Game;
