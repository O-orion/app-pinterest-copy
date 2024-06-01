import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    pressable: {},
    text: {
        color: theme.colors.gray[600],
        fontSize: 16,
        fontFamily: theme.fontFamily.medium
    },
    pressableSelected: {
        color: theme.colors.gray[700],
        borderBottomWidth: 4,
        borderRadius: 2,
        borderBottomColor: theme.colors.white
    },
    textSelected: {
        color: theme.colors.white
    }
})