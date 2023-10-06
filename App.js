// import * as firebase from "firebase";

// import { firebaseConfig } from "./firebaseConfig";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Routes from "./src/navigation/routes";
import GameProvider from "./src/provider/GameProvider";

import AppSplashScreen from "./AppLoading";

// Inicializa Firebase
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

export default function App() {
  return (
    <SafeAreaProvider>
      <AppSplashScreen>
        <GameProvider>
          <NavigationContainer theme={navTheme}>
            <Routes />
          </NavigationContainer>
        </GameProvider>
      </AppSplashScreen>
    </SafeAreaProvider>
  );
}
