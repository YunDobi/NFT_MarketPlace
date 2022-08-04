import React, { useState } from "react";
import { View, SafeAreaView, FlatList, Text } from "react-native";

//dummy data and images or css locations
import { COLORS, NFTData } from "../constants";
import { NFTcard, HomeHeader, FocusedStatusBar, CircleButton, RectButton } from "../components";

function Home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary}} key="container">
      {/* real top view point(time bettery bar) */}
      <FocusedStatusBar barStyle='light-content'/>

      <View style={{ flex: 1 }} key="body">
        <View style={{ zIndex: 0 }} key="secondBody">
          <FlatList
            key={NFTData.id}
            data={NFTData}
            renderItem={({ item }) => <NFTcard data={item} key={item.id}/>}
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
