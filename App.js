// import * as firebase from "firebase";

// import { firebaseConfig } from "./firebaseConfig";

import { SafeAreaProvider } from "react-native-safe-area-context";
import AppSplashScreen from "./AppLoading";
import Background from "./src/components/layout/Background";
import Game from "./src/screens/Game";

// Inicializa Firebase
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

export default function App() {
  return (
    <SafeAreaProvider>
      <AppSplashScreen>
        <Background>
          <Game />
        </Background>
      </AppSplashScreen>
    </SafeAreaProvider>
  );
}
