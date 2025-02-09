import React from 'react'
import { View, Text, FlatList, ActivityIndicator, Image, TouchableOpacity, RefreshControl } from 'react-native'
import { useCryptoListViewModel } from './view-model/crypto-list-view-model'
import { CryptoCurrency } from '../../business-logic/response-models/crypto-currency'
import { CommonStyles } from '../../common/styles'
import { CryptoListStyles } from './styles/crypto-list-styles'
import { ItemsPerPageSelectorModal } from '../../common/components/items-per-page-selector-modal'
import { Colors } from '../../common/colors'
import Paginator from '../../common/components/paginator'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function CryptoListView() {

  const {
    useGetCryptoCurrencies,
    page,
    itemsPerPage,
    optionsOfItemsPerPage,
    setPage,
    setItemsPerPage,
    isSelectorVisible,
    setIsSelectorVisible,
    navigateToDetail
  } = useCryptoListViewModel()

  const { data: cryptoCurrencies, isLoading, error, refetch: refetchCryptoCurrencies, isFetching } = useGetCryptoCurrencies()

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
        navigateToDetail(item.id);
      }}>
        <Text style={CryptoListStyles.pressableText}>
          See Detail
        </Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={CommonStyles.headerBar}>
          <Text style={CommonStyles.headerBarTitle}>Cryptocurrencies</Text>
          <View style={CryptoListStyles.filterContainer}>
            <Text style={CryptoListStyles.filterLabel}>Items:</Text>
            <TouchableOpacity
              style={CryptoListStyles.filterButton}
              onPress={() => setIsSelectorVisible(true)}>
              <Text style={CryptoListStyles.filterButtonText}>{itemsPerPage}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          contentContainerStyle={{ paddingBottom: 80 }}
          data={cryptoCurrencies}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          onRefresh={refetchCryptoCurrencies}
          refreshing={isLoading || isFetching}
          refreshControl={
            <RefreshControl
              refreshing={isLoading || isFetching}
              onRefresh={refetchCryptoCurrencies}
              tintColor={Colors.primary}
            />
          }
        />
        <ItemsPerPageSelectorModal
          isVisible={isSelectorVisible}
          optionsOfItemsPerPage={optionsOfItemsPerPage}
          onClose={() => setIsSelectorVisible(false)}
          onSelect={async (value) => {
            await setItemsPerPage(value)
            refetchCryptoCurrencies()
          }}
          currentValue={itemsPerPage}
        />
        <Paginator
          page={page}
          availableLeftPages={page > 1}
          availableRightPages={(cryptoCurrencies && cryptoCurrencies.length > 0) ?? false}
          onPageChange={async (page) => {
            await setPage(page)
            refetchCryptoCurrencies()
          }}
        />
      </View>
    </SafeAreaView>
  )
}