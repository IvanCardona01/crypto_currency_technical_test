import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const CryptoListStyles = StyleSheet.create({
    card: {
        marginVertical: 5,
        marginHorizontal: 16,
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 50,
        height: 50,
        alignSelf: 'center',
        marginRight: 16,
    },
    pressableText: {
        color: Colors.primary,
        textDecorationLine: 'underline',
        fontSize: 14,
        padding: 6,
    }
});