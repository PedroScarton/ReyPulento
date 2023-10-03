import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

import { defaultStyles } from "../../constants/default-styles";
import { colors } from "../../constants/colors";

const Button = ({ onPress, title, variant = "contained", textColor }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={{ ...styles.button, ...variants[variant] }}>
          <Text
            style={{
              ...styles.text,
              ...(textColor ? { color: textColor } : {}),
            }}
          >
            {title}
          </Text>
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
    paddingVertical: 12,
    backgroundColor: colors.primary,
  },
  containedButton: {
    backgroundColor: colors.primary,
  },
  textButton: {
    backgroundColor: "transparent",
  },
  text: {
    textAlign: "center",
    textTransform: "uppercase",
    ...defaultStyles.text,
  },
});

const variants = {
  contained: styles.containedButton,
  text: styles.textButton,
};

export default Button;
