import { FlatList } from "react-native-gesture-handler";
import { Filter } from "../Filter";
import { styles } from "../Filters/styles";
import { FiltersProps } from "./filters";

export function Filters({filters, filter, onChange}: FiltersProps) {
    return <FlatList 
    horizontal
    data={filters} 
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.content}
    style={styles.list}
    keyExtractor={item => item} 
    renderItem={(  { item }) => <Filter filter={item} selected={item === filter} 
    onPress={() => onChange(item)} />}
        />
}