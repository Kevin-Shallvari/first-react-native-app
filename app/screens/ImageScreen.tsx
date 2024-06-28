import React, { FC } from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";
import image from "../assets/chair.jpg";
import { colors } from "../utils/colors";

export const ImageScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.buttonContainer}>
        <View style={styles.exitButton} />
        <View style={styles.nextButton} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  buttonContainer: {
    width: "100%",
    position: "absolute",
    left: 0,
    top: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  exitButton: {
    width: 40,
    height: 40,
    backgroundColor: colors.primary,
  },
  nextButton: {
    width: 40,
    height: 40,
    backgroundColor: colors.secondary,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
});
