import React from "react";
import { Text, View, StyleSheet } from "react-native";

import Button from "../components/form/Button";

import TextCard from "./ui/TextCard";

import { defaultStyles } from "../constants/default-styles";

const Challenge = ({ onIncrease, onDecrease, player, challenge }) => {
  return (
    <>
      <Text style={styles.header}>LE TOCA A {player}</Text>
      <TextCard content={challenge} />
      <View style={styles.controls}>
        <View style={styles.btnContainer}>
          <Button title="Ni cagando" onPress={onDecrease} variant="text" />
        </View>
        <View style={styles.btnContainer}>
          <Button title="Facilito" onPress={onIncrease} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    ...defaultStyles.header,
    textAlign: "center",
  },
  controls: {
    width: "100%",
    flexDirection: "row",
    gap: 16,
  },
  btnContainer: {
    flex: 1,
  },
});

export default Challenge;
