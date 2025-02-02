import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { IconSymbol } from "./ui/IconSymbol";
import { BankName, getBankLogo, getBankTint } from "@/constants/Banks";

interface BankTypeProps {
  bank: BankName; // Define possible types
}

const BankType = ({ bank }: BankTypeProps) => {
  const styles = StyleSheet.create({
    button: {
      flexDirection: "row",
      alignItems: "center",
      borderRadius: 30,
      alignSelf: "flex-start",
      paddingHorizontal: 16,
      paddingVertical: 12,
      backgroundColor: getBankTint(bank),
      opacity: 0.7,
    },
    iconContainer: {
      marginRight: 8,
      backgroundColor: "white",
      padding: 4,
      borderRadius: 8,
    },
    text: {
      color: "white",
      fontSize: 16,
      fontWeight: "600",
    },
  });

  return (
    <View style={styles.button}>
      <Image style={styles.iconContainer} source={getBankLogo(bank)} />
      <Text style={styles.text}>{bank}</Text>
    </View>
  );
};

export default BankType;
