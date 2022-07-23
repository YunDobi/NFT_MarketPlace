import React, {useState} from "react";
import {View, SafeAreaView, FlatList, Text} from "react-native";

//dummy data and images or css locations
import {COLORS, NFTData} from "../constants";
import { NFTcard, HomeHeader, FocusedStateBar } from "../components";

function Home() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <FocusedStateBar background={COLORS.primary} />
    </SafeAreaView>
  )
}

export default Home