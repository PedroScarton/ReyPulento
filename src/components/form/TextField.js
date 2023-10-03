import React from "react";
import { TextInput, StyleSheet } from "react-native";

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
    flex: 1,
    backgroundColor: colors.white,
    fontSize: 16,
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderRadius: 6,
    fontFamily: "ConcertOne-Regular",
  },
});

export default TextField;
