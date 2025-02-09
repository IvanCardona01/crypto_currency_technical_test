import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import { useCryptoDetailViewModel } from './view-model/crypto-detail-view-model';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CryptoCurrency } from '../../business-logic/response-models/crypto-currency';
import { CryptoDetailStyles } from './styles/crypto-detail-style';
import { Icons } from '../../assets/icons';

export default function CryptoDetailView() {
    const route = useRoute();
    const { cryptocurrencyInfo } = route.params as { cryptocurrencyInfo: string };
    const cryptoInfo: CryptoCurrency = JSON.parse(cryptocurrencyInfo);

    const { goBack } = useCryptoDetailViewModel();

    return (
        <SafeAreaView style={CryptoDetailStyles.container}>
            <View style={CryptoDetailStyles.header}>
                <TouchableOpacity testID="back-button" onPress={goBack} style={CryptoDetailStyles.backButton}>
                    <Icons.BackIcon />
                </TouchableOpacity>
                <Text style={CryptoDetailStyles.title}>{cryptoInfo?.name}</Text>
            </View>

            <View style={CryptoDetailStyles.content}>
                <View style={CryptoDetailStyles.infoCard}>
                    <Text style={CryptoDetailStyles.label}>Current Price</Text>
                    <Text style={CryptoDetailStyles.value}>${cryptoInfo?.price_usd}</Text>
                </View>

                <View style={CryptoDetailStyles.statsContainer}>
                    <View style={CryptoDetailStyles.statCard}>
                        <Text style={CryptoDetailStyles.label}>24h Change</Text>
                        <Text style={[
                            CryptoDetailStyles.value,
                            { color: Number(cryptoInfo?.percent_change_24h) > 0 ? 'green' : 'red' }
                        ]}>
                            {cryptoInfo?.percent_change_24h}%
                        </Text>
                    </View>

                    <View style={CryptoDetailStyles.statCard}>
                        <Text style={CryptoDetailStyles.label}>Market Cap</Text>
                        <Text style={CryptoDetailStyles.value}>${cryptoInfo?.market_cap_usd}</Text>
                    </View>
                </View>

                <View style={CryptoDetailStyles.infoCard}>
                    <Text style={CryptoDetailStyles.label}>Volume (24h)</Text>
                    <Text style={CryptoDetailStyles.value}>${cryptoInfo?.volume24}</Text>
                </View>

                <View style={CryptoDetailStyles.infoCard}>
                    <Text style={CryptoDetailStyles.label}>Circulating Supply</Text>
                    <Text style={CryptoDetailStyles.value}>{cryptoInfo?.csupply} {cryptoInfo?.symbol}</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}