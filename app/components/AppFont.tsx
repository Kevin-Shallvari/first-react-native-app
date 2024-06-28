import React, { FC, PropsWithChildren } from "react";
import {
  Text,
  StyleSheet,
  StyleProp,
  TextStyle,
} from "react-native";

export const AppFont: FC<
  PropsWithChildren<{ style?: StyleProp<TextStyle> }>
> = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "WorkSans-Black",
  },
});
