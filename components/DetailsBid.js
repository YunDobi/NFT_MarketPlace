import { View, Text, Image } from 'react-native'
import React from 'react'
import { Ethprice } from './SubInfo'
import { FONTS, SIZES, COLORS } from '../constants'

const DetailsBid = ({bid}) => {
  return (
    <View style={{
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: SIZES.base,
      paddingHorizontal: SIZES.base * 2

    }}>
      <Image source={bid.item.image} resizeMode="contain" style={{width:48, height:48}}/>
      <View>
        <Text style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.small,
          color: COLORS.primary
        }}>
          Bid placed by {bid.item.name}
        </Text>

        <View>
          <Text style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small -2,
            color: COLORS.secondary,
            marginTop: 3
          }}>
            Bid placed by {bid.item.date}
          </Text>
        </View>
      </View>

      <Ethprice price={bid.item.price} />
    </View>
  )
}

export default DetailsBid