import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Settings from "../Settings";

const Wrapper = ({ children }) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.settings}>
        <Settings />
      </View>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    gap: 16,
    paddingHorizontal: 16,
  },
  settings: {
    width: "100%",
    alignItems: "flex-end",
  },
  container: {
    flex: 1,
    gap: 16
  },
});

export default Wrapper;
