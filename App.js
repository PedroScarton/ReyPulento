import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import AppSplashScreen from "./AppLoading";
import Background from "./src/components/layout/Background";
import { defaultStyles } from "./src/constants/default-styles";

// import * as firebase from "firebase";
// import { firebaseConfig } from "./firebaseConfig";

// Inicializa Firebase
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

export default function App() {
  return (
    <AppSplashScreen>
      <Background>
        <Text style={defaultStyles.text}>Rey Pulento</Text>
        <StatusBar style="light" />
      </Background>
    </AppSplashScreen>
  );
}
