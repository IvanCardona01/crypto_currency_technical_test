import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../colors'
import { Icons } from '../../assets/icons'

export default function Paginator({ page, availableLeftPages, availableRightPages, onPageChange }: { page: number, availableLeftPages: boolean, availableRightPages: boolean, onPageChange: (page: number) => void }) {
    return (
        <View style={Styles.paginationContainer}>
            {availableLeftPages && (
                <TouchableOpacity
                    style={Styles.paginationButton}
                    onPress={() => onPageChange(page - 1)}
                >
                    <Icons.ArrowLeftCircle />
                </TouchableOpacity>
            )}

            <View style={Styles.paginationPageContainer}>
                <Text style={Styles.paginationText}>Pag {page}</Text>
            </View>

            {availableRightPages && (
                <TouchableOpacity
                    style={Styles.paginationButton}
                    onPress={() => onPageChange(page + 1)}
                >
                    <Icons.ArrowRightCircle />
                </TouchableOpacity>
            )}
        </View>
    )
}

const Styles = StyleSheet.create({
    paginationContainer: {
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'rgba(0,0,0,0.7)',
        borderRadius: 100,
        padding: 8,
    },
    paginationButton: {
        paddingHorizontal: 4,
        paddingVertical: 2,
    },
    paginationPageContainer: {
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    paginationText: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
})