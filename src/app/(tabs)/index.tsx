import { Filter } from "@/components/Filter";
import { Filters } from "@/components/Filters";
import { theme } from "@/theme";
import { FILTERS } from "@/utils/filters";
import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Home() {
    const [filter, setFilter] = useState(FILTERS[0])
    return (
        <View style={ style.container}>
           <Filters  filter={filter} onChange={setFilter} filters={FILTERS}  ></Filters>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        paddingTop: 52,
        backgroundColor: theme.colors.black
    },
    text: {
        fontSize: 22,
        color: theme.colors.white,
        fontFamily: theme.fontFamily.bold
    }
})

