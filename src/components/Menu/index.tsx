import { Text, View } from "react-native";
import { styles } from "./style";
import BottomSheet from "@gorhom/bottom-sheet";
import { forwardRef } from "react";
import { MenuProps } from "./menu";
import { FontAwesome } from "@expo/vector-icons";
import { theme } from "@/theme";
import { MenuBottom } from "../MenuBottom";

export const Menu = forwardRef<BottomSheet, MenuProps>(({ oncLose }, ref) => {
  return (
    <BottomSheet
      handleComponent={() => null}
      backgroundStyle={styles.container}
      ref={ref}
      index={0}
      snapPoints={[0.01, 250]}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <FontAwesome
            color={theme.colors.white}
            style={styles.icon}
            name="close"
            size={24}
            onPress={oncLose}
          ></FontAwesome>
          <Text style={styles.title}>Olá</Text>
        </View>

        <View style={styles.options}>
          <MenuBottom title={"Pin"} icon={"home"}></MenuBottom>
          <MenuBottom title={"Colagem"} icon={"paste"}></MenuBottom>
          <MenuBottom title={"Pasta"} icon={"folder"}></MenuBottom>
        </View>
      </View>
    </BottomSheet>
  );
});
