import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Background from "../components/layout/Background";

import Start from "../screens/Start";
import Game from "../screens/Game";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Background>
      <Stack.Navigator
        initialRouteName="Start"
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
          cardStyle: {},
        }}
      >
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Game" component={Game} />
      </Stack.Navigator>
    </Background>
  );
};

export default Routes;
