import { View, Text, FlatList, ActivityIndicator, Image, TouchableHighlight, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useCryptoListViewModel } from './view-model/crypto-list-view-model'
import { CryptoCurrency } from '../../business-logic/response-models/crypto-currency'
import { CommonStyles } from '../../common/styles'
import { CryptoListStyles } from './styles/crypto-list-styles'

export default function CryptoListScreen() {
  const { useGetCryptoCurrencies, page, itemsPerPage, setPage, setItemsPerPage } = useCryptoListViewModel()

  const { data: cryptoCurrencies, isLoading, error, refetch: refetchCryptoCurrencies } = useGetCryptoCurrencies()

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Error: {error.message}</Text>
      </View>
    )
  }

  const renderItem = ({ item }: { item: CryptoCurrency }) => (
    <View style={CryptoListStyles.card}>
      <Image source={{ uri: `https://www.coinlore.com/img/${item.nameid}.png` }} resizeMode="cover" style={CryptoListStyles.image} />
      <View >
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
        <Text>Price in USD: ${item.price_usd}</Text>
        <Text>Ranking: {item.rank}</Text>
      </View>
      <TouchableOpacity style={{ marginLeft: 'auto' }} onPress={() => {
        console.log('Pressed')
      }}>
        <Text style={CryptoListStyles.pressableText}>
          See Detail
        </Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <View style={{ flex: 1 }}>
      <View style={{ ...CommonStyles.headerBar, justifyContent: 'center', alignItems: 'center', marginBottom: 6 }}>
        <Text style={CommonStyles.headerBarTitle}>Cryptocurrencies</Text>
      </View>
      <FlatList
        data={cryptoCurrencies}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onRefresh={refetchCryptoCurrencies}
        refreshing={isLoading}
      />
    </View>
  )
}