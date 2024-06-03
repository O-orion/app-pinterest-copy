import { Tabs } from "expo-router";
import { Foundation, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { theme } from "@/theme";
import { Avatar } from "@/components/Avatar";
import { Menu } from "@/components/Menu";
import { View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { useRef } from "react";

export default function TabLayout() {
  const bottomSheetRef = useRef<BottomSheet>(null)

  const handleBottomSheetOpen = () => bottomSheetRef.current?.expand()
  const handleBottomSheetClose = () => bottomSheetRef.current?.snapToIndex(0)

  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: theme.colors.black,
            borderColor: theme.colors.black,
          },
          tabBarActiveTintColor: theme.colors.white,
          tabBarInactiveTintColor: theme.colors.gray[600],
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ size, color }) => (
              <Foundation color={color} size={size} name="home" />
            ),
          }}
        ></Tabs.Screen>
        <Tabs.Screen
          name="search"
          options={{
            tabBarIcon: ({ size, color }) => (
              <Ionicons color={color} size={size} name="search" />
            ),
          }}
        ></Tabs.Screen>
        <Tabs.Screen
          name="menu"
          options={{
            tabBarIcon: ({ size, color }) => (
              <FontAwesome5 color={color} size={size} name="plus" />
            ),
          }}
          listeners={() => ({
            tabPress: (event) => {
              event.preventDefault();
              handleBottomSheetOpen()
            },
          })}
        ></Tabs.Screen>
        <Tabs.Screen
          name="messages"
          options={{
            tabBarIcon: ({ size, color }) => (
              <Ionicons color={color} size={size} name="chatbubble-ellipses" />
            ),
          }}
        ></Tabs.Screen>
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ size, color }) => (
              <Avatar
                selected={color === theme.colors.white}
                source={{ uri: "https://github.com/O-orion.png" }}
              ></Avatar>
            ),
          }}
        ></Tabs.Screen>
      </Tabs>

      <Menu oncLose={handleBottomSheetClose} ref={bottomSheetRef} />
    </View>
  );
}
