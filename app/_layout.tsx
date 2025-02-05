import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen
          name="transactionDetails"
          options={{ title: "Check Transaction" }}
        />
        <Stack.Screen
          name="createTransaction"
          options={{ title: "Create Transaction" }}
        />
        <Stack.Screen
          name="createGoal"
          options={{ title: "Create Goal" }}
        />
        <Stack.Screen
          name="createBudget"
          options={{ title: "Create Budget" }}
        />
        <Stack.Screen
          name="createCategory"
          options={{ title: "Create Category" }}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
