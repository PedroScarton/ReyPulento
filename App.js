// import * as firebase from "firebase";

// import { firebaseConfig } from "./firebaseConfig";

import AppSplashScreen from "./AppLoading";
import Background from "./src/components/layout/Background";

// Inicializa Firebase
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

export default function App() {
  return (
    <AppSplashScreen>
      <Background></Background>
    </AppSplashScreen>
  );
}
