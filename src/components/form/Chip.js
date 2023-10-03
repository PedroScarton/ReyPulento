import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import { colors } from "../../constants/colors";
import { defaultStyles } from "../../constants/default-styles";

const Chip = ({ onPress, text }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{text}</Text>
        <MaterialIcons name="close" size={20} color={colors.black} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.white,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  text: {
    ...defaultStyles.text,
    color: colors.black,
    textTransform: "capitalize",
  },
});

export default Chip;
