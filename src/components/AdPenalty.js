import React from "react";
import { Text, StyleSheet } from "react-native";

import Button from "../components/form/Button";

import TextCard from "./ui/TextCard";

import { defaultStyles } from "../constants/default-styles";

const AdPenalty = ({ onSuccess, player }) => {

  const onConfirm = () => {
    onSuccess();
  };
  return (
    <>
      <Text style={styles.header}>Castigo para {player}</Text>
      <TextCard
        content={
          "LOS OTROS JUGADORES DECIDIRAN CUANTOS TRAGOS DEBES TOMAR DURANTE ESTA PAUSA PUBLICITARIA"
        }
      />
      <Button title="Comenzar castigo" onPress={onConfirm} />
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    ...defaultStyles.header,
    textAlign: "center",
  },
});

export default AdPenalty;
