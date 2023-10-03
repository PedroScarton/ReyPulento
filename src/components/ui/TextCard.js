import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { colors } from "../../constants/colors";
import { defaultStyles } from "../../constants/default-styles";

const TextCard = ({ content }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 6,
    width: "100%",
    padding: "",
    minHeight: 130,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 50,
    paddingVertical: 35,
  },
  text: {
    ...defaultStyles.text,
    color: colors.black,
    textAlign: "center",
  },
});

export default TextCard;
