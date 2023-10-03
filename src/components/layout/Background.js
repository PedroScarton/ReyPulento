import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import BackgroundImage from "../../../assets/images/background.png";

const Background = ({ children }) => {
  return (
    <ImageBackground style={styles.image} source={BackgroundImage}>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: { flex: 1 },
});

export default Background;
