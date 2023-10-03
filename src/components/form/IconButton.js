import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import { View, StyleSheet, TouchableOpacity } from "react-native";

import { colors } from "../../constants/colors";

const IconButton = ({ onPress, icon, size, color, variant = "contained" }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ ...styles.button, ...variants[variant].button }}>
        <MaterialIcons
          name={icon}
          size={size}
          color={color || variants[variant].icon}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  containedButton: {
    backgroundColor: colors.white,
  },
  textButton: {
    backgroundColor: "transparent",
  },
});

const variants = {
  contained: {
    button: styles.containedButton,
    icon: colors.black,
  },
  text: {
    button: styles.textButton,
    icon: colors.primary,
  },
};

export default IconButton;
