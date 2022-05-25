import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton
        text="Delivery"
        bgColor="black"
        textColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        bgColor="white"
        textColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

const HeaderButton = ({
  text,
  bgColor,
  textColor,
  activeTab,
  setActiveTab,
}) => (
  <TouchableOpacity
    style={{
      backgroundColor: activeTab === text ? "black" : "white",
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}
    onPress={() => setActiveTab(text)}
  >
    <Text
      style={{
        color: activeTab === text ? "white" : "black",
        fontSize: 15,
        fontWeight: "bold",
      }}
    >
      {text}
    </Text>
  </TouchableOpacity>
);
export default HeaderTabs;
