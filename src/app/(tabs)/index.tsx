import { theme } from "@/theme";
import { View, StyleSheet, Text } from "react-native";

export default function Home() {
    return (
        <View style={ style.container}>
            <Text style={style.text} >Home</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: theme.colors.black
    },
    text: {
        fontSize: 22,
        color: theme.colors.white,
        fontFamily: theme.fontFamily.bold
    }
})

