import { Image, StyleSheet, Platform, SafeAreaView, View } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Header from "@/components/Header";
import FilterContainer from "@/components/containers/FilterContainer";
import { FilterComponentProps } from "@/components/FilterComponent";

export default function HomeScreen() {
  const filterData: FilterComponentProps[] = [
    { text: "Last Salary", isActive: true },
    { text: "Today" },
    { text: "7 Days" },
    { text: "15 Days" },
    { text: "30 Days" },
  ];

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
    >
      <SafeAreaView>
        {/* Header */}

        <ThemedView>
          <Header title="30 Oct- 31 Oct" iconName="settings" />
        </ThemedView>

        {/* Expense */}

        <ThemedView style={{ marginTop: "30%" }}>
          <ThemedText style={{ textAlign: "center" }}>Expense</ThemedText>
          <ThemedText
            type="title"
            style={{
              textAlign: "center",
              lineHeight: 48,
              marginTop: 16,
              color: "white",
              fontSize: 48,
            }}
          >
            ₹ 62,775
          </ThemedText>
        </ThemedView>

        {/* Filter */}

        <ThemedView style={{ marginTop: "10%" }}>
          <FilterContainer data={filterData} />
        </ThemedView>

      </SafeAreaView>
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
