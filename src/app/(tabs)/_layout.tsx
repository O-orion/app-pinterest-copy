import { Tabs } from "expo-router";
import { Foundation, Ionicons } from "@expo/vector-icons";
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
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
            <Foundation color={color} size={size} name="male" />
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
}
