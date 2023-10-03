import React, { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function AppSplashScreen(props) {
  const [fontsLoaded] = useFonts({
    "ConcertOne-Regular": require("./assets/fonts/ConcertOne-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar style="light" />
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
