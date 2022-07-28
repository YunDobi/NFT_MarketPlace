import {TouchableOpacity, Image, View, Text } from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS, SHADOWS } from '../constants'

export const CircleButton = ({imgUrl, handlePress, ...props}) => {
  return (
    <TouchableOpacity style={{
      width: 40,
      height:40,
      backgroundColor: COLORS.white,
      position: 'absolute',
      borderRadius: SIZES.extraLarge,
      alignItems: "center",
      justifyContent: "center",
      ...SHADOWS.light,
      ...props,
    }}
    onPress={handlePress}>
    {/* heart */}
    <Image source={imgUrl} resizeMode="contain" style={{height:24, width:24}} />

    </TouchableOpacity>
  )
}

export const RectButton = () => {
  return (
    <View>
      <Text>Rect Button</Text>
    </View>
  )
}