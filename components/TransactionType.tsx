import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { IconSymbol } from "./ui/IconSymbol";

interface TransactionTypeProps {
  transactionType: "expense" | "income"; // Define possible types
}

const TransactionType = ({ transactionType }: TransactionTypeProps) => {
  return (
    <View style={styles.button}>
      <View style={styles.iconContainer}>
        <IconSymbol
          size={12}
          name={transactionType === "expense" ? "arrow-down" : "arrow-up"}
          color="#7E44E0"
        />
      </View>
      <Text style={styles.text}>
        {transactionType.charAt(0).toUpperCase() + transactionType.slice(1)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#7E44E0",
    borderRadius: 24,
    alignSelf: "flex-start",
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  iconContainer: {
    marginRight: 8,
    backgroundColor: "white",
    padding: 4,
    borderRadius: 100,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
export default TransactionType;
