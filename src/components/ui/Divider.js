import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { colors } from "../../constants/colors";

const DASH_WIDTH = 8;
const DASH_GAP = 10;
const SCREEN_WIDTH = Dimensions.get("window").width;

const Divider = ({ width = SCREEN_WIDTH }) => {
  const dashCount = Math.ceil(width / (DASH_WIDTH + DASH_GAP));

  return (
    <View style={[styles.container, { width }]}>
      {Array.from({ length: dashCount }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.dash,
            { marginRight: index === dashCount - 1 ? 0 : DASH_GAP },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  dash: {
    width: DASH_WIDTH,
    height: 2,
    backgroundColor: colors.primary,
  },
});

export default Divider;
