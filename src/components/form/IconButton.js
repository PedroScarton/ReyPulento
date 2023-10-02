import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import { View, StyleSheet, TouchableOpacity } from "react-native";

import { colors } from "../../constants/colors";

const IconButton = ({ onPress, icon, size, variant = "contained" }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={{ ...styles.button, ...variants[variant].button }}>
          <MaterialIcons
            name={icon}
            size={size}
            color={variants[variant].icon}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    overflow: "hidden",
    borderRadius: 6,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 10,
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
