import { StyleSheet } from "react-native";

import { colors } from "./colors";

export const defaultStyles = StyleSheet.create({
  text: {
    color: colors.white,
    fontFamily: "ConcertOne-Regular",
    fontSize: 16,
  },
  header: {
    color: colors.white,
    fontFamily: "ConcertOne-Regular",
    fontSize: 16,
    textTransform: "uppercase",
  },
});
