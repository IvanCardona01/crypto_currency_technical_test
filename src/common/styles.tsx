import { StyleSheet } from "react-native";
import { Colors } from "./colors";

export const CommonStyles = StyleSheet.create({
    headerBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        height: 60,
        backgroundColor: Colors.primary,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 3.84,
        elevation: 3,
    },
    headerBarTitle: {
        fontSize: 20,
        color: Colors.white,
        fontWeight: 'bold',
    }
});