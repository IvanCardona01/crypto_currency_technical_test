import { StyleSheet } from "react-native";
import { Colors } from "../../../common/colors";

export const CryptoDetailStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
    },
    backButton: {
        marginRight: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.grayDark,
    },
    content: {
        padding: 16,
        gap: 16,
    },
    infoCard: {
        backgroundColor: Colors.white,
        padding: 16,
        borderRadius: 12,
        elevation: 2,
    },
    statsContainer: {
        flexDirection: 'row',
        gap: 16,
    },
    statCard: {
        flex: 1,
        backgroundColor: Colors.white,
        padding: 16,
        borderRadius: 12,
        elevation: 2,
    },
    label: {
        fontSize: 14,
        color: Colors.secondary,
        marginBottom: 4,
    },
    value: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.grayDark,
    }
});