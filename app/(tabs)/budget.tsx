import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import GoalsContainer from "@/components/containers/GoalsContainer";
import { GoalCardProps } from "@/components/GoalCard";
import Header from "@/components/Header";

export default function HomeScreen() {
  const setNewGoal = () => {
    console.log("new goal");
  };

  const buttonStyle = StyleSheet.create({
    primary: {
      width: "100%",
      textAlign: "center",
      paddingVertical: 12,
      borderRadius: 36,
      backgroundColor: "#7E44E0",
      color: "#ddd",
    },
  });

  const budgetData: GoalCardProps[] = [
    {
      iconName: "shopping-bag",
      goalName: "Groceries",
      message: "spent ₹ 6,541 ",
      amount: "8,000",
      iconColor: "#3A6763",
      tint: "#6E9995",
      progress: 0.9,
    },
    {
      iconName: "shopping-bag",
      goalName: "Groceries",
      message: "spent ₹ 6,541 ",
      amount: "8,000",
      iconColor: "#3A6763",
      tint: "#6E9995",
      progress: 0.6,
    },
  ];

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
    >
      {/* Header */}

      <ThemedView style={{ padding: 20 }}>
        <Header title="Your Budget" iconName="x" />
      </ThemedView>

      {/* Set new budget button */}

      <ThemedView>
        <ThemedText onPress={setNewGoal} style={buttonStyle.primary}>
          Set New Budget
        </ThemedText>
      </ThemedView>

      {/* List of Budget cards */}

      <GoalsContainer data={budgetData} />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
