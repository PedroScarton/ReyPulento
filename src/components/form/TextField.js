import React from "react";
import { TextInput, StyleSheet, Dimensions } from "react-native";

import { colors } from "../../constants/colors";

const TextField = ({ placeholder, onChange, value }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChange}
      value={value}
      placeholderTextColor={colors.black}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: Dimensions.get("window").width,
    backgroundColor: colors.white,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 6,
    fontFamily: "ConcertOne-Regular",
  },
});

export default TextField;
