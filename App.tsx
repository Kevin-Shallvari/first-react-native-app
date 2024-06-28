import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
} from "react-native";
import { WelcomeScreen } from "./app/screens/WelcomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { UniversalSafeArea } from "./app/components/UniversalSafeArea";
import { ImageScreen } from "./app/screens/ImageScreen";
import { useFonts } from "expo-font";
import { Error } from "./app/components/Error";
import { Loading } from "./app/components/Loading";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "WorkSans-Black": require("./app/assets/fonts/WorkSans-Black.ttf"),
  });

  if (fontError) {
    return <Error />;
  }

  if (!fontsLoaded && !fontError) {
    return <Loading />;
  }

  return (
    <SafeAreaProvider>
      <UniversalSafeArea>
        <WelcomeScreen />
      </UniversalSafeArea>
    </SafeAreaProvider>
  );
}
