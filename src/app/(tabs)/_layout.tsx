import { Tabs } from "expo-router";
import { Foundation, Ionicons } from "@expo/vector-icons";
import { theme } from "@/theme";
import { Avatar } from "@/components/Avatar";
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
            backgroundColor: theme.colors.black,
            borderColor: theme.colors.black
        },
        tabBarActiveTintColor: theme.colors.white,
        tabBarInactiveTintColor: theme.colors.gray[600]
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
            <Avatar  selected={color === theme.colors.white}  source={{ uri: 'https://github.com/O-orion.png' }} ></Avatar>
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
}
