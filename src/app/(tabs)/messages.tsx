import { theme } from "@/theme";
import { View, StyleSheet, Text } from "react-native";

export default function Menssages() {
    return (
        <View style={ style.container}>
            <Text style={style.text} >Menssages</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.black
    },
    text: {
        fontSize: 22,
        color: theme.colors.white,
        fontFamily: theme.fontFamily.bold
    }
})

