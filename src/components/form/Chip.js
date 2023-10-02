import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import { colors } from "../../constants/colors";
import { defaultStyles } from "../../constants/default-styles";

const Chip = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.text}>Hola</Text>
          <MaterialIcons name="close" size={20} color={colors.black} />
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
