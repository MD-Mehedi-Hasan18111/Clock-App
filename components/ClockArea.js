import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const ClockArea = () => {
  const [time, setTime] = useState("");
  const [status, setStatus] = useState("");
  const [amPm, setAmPm] = useState("");

  // Function to update time, AM/PM, and status
  const updateTime = () => {
    const current = new Date();
    const hours = current.getHours();
    const minutes = String(current.getMinutes()).padStart(2, "0");
    const seconds = String(current.getSeconds()).padStart(2, "0");

    // Format the time as 12-hour format and set AM/PM
    const formattedHours = hours % 12 || 12;
    const amPmIndicator = hours >= 12 ? "PM" : "AM";

    setTime(`${formattedHours}:${minutes}:${seconds}`);
    setAmPm(amPmIndicator);
    setStatus(hours < 12 ? "MORNING" : hours < 18 ? "AFTERNOON" : "EVENING");
  };

  useEffect(() => {
    updateTime(); // Set initial time, AM/PM, and status
    const interval = setInterval(updateTime, 1000); // Update every second
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <View style={{ paddingVertical: 80 }}>
      <View
        style={{ flexDirection: "row", columnGap: 8, alignItems: "center" }}
      >
        <Image source={require("../assets/sun.png")} />
        <Text
          style={{
            fontFamily: "Inter-Regular",
            fontSize: 20,
            color: "#fff",
            letterSpacing: 3,
          }}
        >
          {status}
        </Text>
      </View>
      <Text style={{ fontSize: 60, color: "#fff", fontFamily: "Inter-Bold" }}>
        {time}
        <Text
          style={{
            fontSize: 30,
            fontFamily: "Inter-Regular",
            color: "#fff",
          }}
        >
          {" "}
          {amPm}
        </Text>
      </Text>
      <Text style={{ color: "#fff", fontSize: 20, fontFamily: "Inter-Bold" }}>
        Chattogram, Bangladesh
      </Text>
    </View>
  );
};

export default ClockArea;
