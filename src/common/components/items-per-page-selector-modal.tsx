import React from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { Colors } from '../colors';

interface ItemsPerPageSelectorProps {
    isVisible: boolean;
    optionsOfItemsPerPage: number[];
    onClose: () => void;
    onSelect: (value: number) => void;
    currentValue: number;
}

export const ItemsPerPageSelectorModal = ({
    isVisible,
    optionsOfItemsPerPage,
    onClose,
    onSelect,
    currentValue
}: ItemsPerPageSelectorProps) => {
    return (
        <Modal
            visible={isVisible}
            transparent
            animationType="fade"
            onRequestClose={onClose}
            supportedOrientations={['portrait', 'landscape']}
        >
            <TouchableOpacity
                style={styles.overlay}
                activeOpacity={1}
                onPress={onClose}
            >
                <View style={styles.content}>
                    <Text style={styles.title}>Items per page</Text>
                    {optionsOfItemsPerPage.map((value) => (
                        <TouchableOpacity
                            key={value}
                            style={[
                                styles.option,
                                currentValue === value && styles.selectedOption
                            ]}
                            onPress={() => {
                                onSelect(value);
                                onClose();
                            }}
                        >
                            <Text style={[
                                styles.optionText,
                                currentValue === value && styles.selectedOptionText
                            ]}>
                                {value}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </TouchableOpacity>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: Colors.overlay,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        backgroundColor: Colors.white,
        borderRadius: 12,
        padding: 16,
        width: '80%',
        maxWidth: 300,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    option: {
        padding: 12,
        borderRadius: 8,
        marginVertical: 4,
    },
    selectedOption: {
        backgroundColor: Colors.primary,
    },
    optionText: {
        fontSize: 16,
        textAlign: 'center',
    },
    selectedOptionText: {
        color: Colors.white,
    },
});