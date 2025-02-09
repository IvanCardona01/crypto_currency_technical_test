import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationService } from '../../presentation-logic/navigation-service'

export default function CryptoDetailView() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Crypto Detail</Text>
            <TouchableOpacity onPress={() => NavigationService.goBack()}>
                <Text>Go Back</Text>
            </TouchableOpacity>
        </View>
    )
}