import { Image, Text, View } from "react-native";

const UpperArea = () => {
  return (
    <View
      style={{ flexDirection: "row", columnGap: 20, alignItems: "flex-start" }}
    >
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 14,
            color: "#fff",
            fontFamily: "Inter-Regular",
            lineHeight: 22,
          }}
        >
          Time is free, but it’s priceless. You can’t own it, but you can use
          it. You can’t keep it, but you can spend it. Once you’ve lost it, you
          can never get it back.
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: "#fff",
            fontStyle: "italic",
            fontFamily: "Inter-Bold",
            marginTop: 8,
          }}
        >
          - Harvey Mackay
        </Text>
      </View>
      <Image source={require("../assets/refresh.png")} />
    </View>
  );
};

export default UpperArea;
