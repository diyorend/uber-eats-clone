import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const RestaurantItem = () => {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      <View style={{ backgroundColor: "#fff", marginTop: 10 }}>
        <ResturantImage />
        <RestaurantInfo />
      </View>
    </TouchableOpacity>
  );
};

const ResturantImage = () => (
  <>
    <Image
      source={{
        uri: "https://d1dxs113ar9ebd.cloudfront.net/225batonrouge/2020/09/225FirstLook-Modesto_003_COLOR.jpg?q=70&crop=faces&fit=crop&w=1300&h=600",
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = () => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontWeight: "bold", fontSize: 16 }}>
        Formhouse Kitchen Thai Cuisine
      </Text>
      <Text style={{ fontSize: 16, color: "gray" }}>30-45 ⋅ min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",

        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        height: 30,
        width: 30,
      }}
    >
      <Text style={{ fontWeight: "bold" }}>5</Text>
    </View>
  </View>
);

export default RestaurantItem;
