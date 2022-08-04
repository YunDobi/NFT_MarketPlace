import { View, Text, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { NFTTitle, Ethprice, SubInfo } from "./SubInfo";

import { CircleButton, RectButton } from "./Botton";

const NFTcard = ({ data }) => {
  const navigation = useNavigation();
  return (
    // container setting
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      {/* cards inside of the container */}
      <View
        style={{
          width: "100%",
          height: 250,
        }}
      >
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
      </View>

      <CircleButton imgUrl={assets.heart} right={10} top={10} />
      {/* people and enddate space from the card */}
      <SubInfo />
        
      {/* title of the each card */}
      <View style={{ width: "100%", padding: SIZES.font }}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />
      </View>

      {/* price and button */}
      <View style={{
        margin: SIZES.font,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <Ethprice price={data.price} />
        {/* Naviate to the Details page where we declaired from App.js, 33  */}
        <RectButton minWidth={120} fontSize={SIZES.font} handlePress={() => navigation.navigate("Details", {data})}/>

      </View>
    </View>
  );
};

export default NFTcard;
