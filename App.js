import { ActivityIndicator, ImageBackground, Text, View } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import UpperArea from "./components/UpperArea";
import ClockArea from "./components/ClockArea";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Inter-Regular": Inter_400Regular,
    "Inter-Bold": Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  } else {
    return (
      <ImageBackground
        style={{
          flex: 1,
        }}
        source={require("./assets/light-bg.png")}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            marginTop: 50,
            paddingHorizontal: 20,
          }}
        >
          <UpperArea />
          <ClockArea />
        </View>
      </ImageBackground>
    );
  }
}
