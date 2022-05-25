import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import HeaderTabs from "../components/HeaderTabs";
import Searchbar from "../components/Searchbar";
import Categories from "../components/Categories";
import { ScrollView } from "react-native";
import RestaurantItem from "../components/RestaurantItem";

const Home = () => {
  return (
    <SafeAreaView style={{ paddingTop: 37, backgroundColor: "#eee" }}>
      <View style={{ backgroundColor: "white", paddingVertical: 10 }}>
        <HeaderTabs />
        <Searchbar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
