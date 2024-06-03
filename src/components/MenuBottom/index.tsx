import { Pressable, Text } from "react-native"
import { styles } from "./style"
import { MenuButtonProps } from "./menuBottom"
import { FontAwesome } from "@expo/vector-icons"
import { theme } from "@/theme"

export  function MenuBottom( {title, icon}: MenuButtonProps ) {
    return (
        <Pressable style={styles.container} >
            <FontAwesome style={styles.icon}  name={icon} size={32} color={theme.colors.white} />
            <Text style={styles.text} >{title}</Text>
        </Pressable>
    )
}