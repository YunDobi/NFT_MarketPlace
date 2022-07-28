import React, { useState } from "react";
import { View, SafeAreaView, FlatList, Text } from "react-native";

//dummy data and images or css locations
import { COLORS, NFTData } from "../constants";
import { NFTcard, HomeHeader, FocusedStatusBar, CircleButton, RectButton } from "../components";

function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* real top view point(time bettery bar) */}
      <FocusedStatusBar background={COLORS.primary}/>

      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={NFTData}
            renderItem={({ item }) => <NFTcard data={item}/>}
            keyExtractor={(item) => {item.id}}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={HomeHeader}
          />
        </View>

        <View style={{position:"absolute",top:0, bottom:0, right:0, left:0,zIndex:-1}}>
          <View style={{height: 300, backgroundColor: COLORS.primary}}/>
          <View style={{flex:1, backgroundColor: COLORS.white}}/>

        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;
