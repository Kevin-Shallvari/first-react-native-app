import React from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import background from "../assets/background.jpg";
import logo from "../assets/logo-red.png";
import { colors } from "../utils/colors";
import { AppFont } from "../components/AppFont";

export const WelcomeScreen = () => {
  return (
    <ImageBackground style={styles.background} source={background}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        <AppFont style={styles.text}>Sell what you dont need</AppFont>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.signupButton}></View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  logoContainer: {
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 50,
  },
  text: {
    fontWeight: "600",
    fontSize: 22,
  },
  logo: {
    height: 80,
    width: 80,
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
    marginTop: "auto",
  },
  signupButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
  },
});
