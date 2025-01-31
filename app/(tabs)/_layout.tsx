import { Tabs } from "expo-router";
import React from "react";
import { Platform, StyleSheet } from "react-native";
import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { BlurView } from "expo-blur";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const screenOptions = {
    tabBarStyle: {
        backgroundColor: "#7E44E0",
        height: 60,
        paddingTop : 10
    },
    tabBarItemStyle: {
      marginRight: 10,
      elevation: 0,
      height : 40
    },
};

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor : 'white',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarLabelPosition: "below-icon",
        tabBarBackground: () => (
          <BlurView
            tint="dark"
            intensity={50}
            style={StyleSheet.absoluteFill}
          />
        ),
        tabBarStyle: screenOptions.tabBarStyle,
        tabBarItemStyle: screenOptions.tabBarItemStyle,
        tabBarShowLabel:false
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={24} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="goals"
        options={{
          title: "Goals",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={24} name="crosshair" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="budget"
        options={{
          title: "Budget",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={24} name="shopping-bag" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          title: "Categories",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={24} name="grid" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="tags"
        options={{
          title: "Tags",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={24} name="tag" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
