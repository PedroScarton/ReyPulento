import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import AppSplashScreen from "./AppLoading";

export default function App() {
  return (
    <AppSplashScreen>
      <Text>Rey Pulento</Text>
      <StatusBar style="auto" />
    </AppSplashScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
