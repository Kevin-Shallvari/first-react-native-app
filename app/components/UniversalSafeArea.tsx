import React, { FC, PropsWithChildren } from "react";
import { Platform, StyleSheet } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export const UniversalSafeArea: FC<PropsWithChildren> = ({ children }) => {
  const { top } = useSafeAreaInsets();
  return (
    <SafeAreaView
      style={{ paddingTop: Platform.OS === "android" ? top : 0, flex: 1 }}
    >
      {children}
    </SafeAreaView>
  );
};