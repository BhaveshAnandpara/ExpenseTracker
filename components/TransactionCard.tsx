import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { FeatherIconName } from "./ui/IconSymbol";
import { ThemedText } from "./ThemedText";

export type TransactionCardProps = {
  iconColor: string;
  image: FeatherIconName;
  tint: string;
  title: string;
  tags: string[];
  dateTime: string;
  transactionType: "arrow-up-right" | "arrow-down-left";
  amount: string;
};

const TransactionCard = (props: TransactionCardProps) => {
  const iconStyle = StyleSheet.create({
    container: {
      backgroundColor: props.tint,
      alignSelf: "center",
      padding: 12,
      borderRadius: 100,
      marginRight: 12,
    },
  });

  const containerStyle = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      height: 90,
      borderBottomWidth: 1,
      borderBottomColor: "#545454",
      paddingVertical: 5,
      //   backgroundColor : 'red'
    },
    infoContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    amountContainer: {
      display: "flex",
      alignItems: "flex-end",
    },
    dateContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      marginBottom: 4,
    },
  });

  return (
    <View style={containerStyle.container}>
      <View style={containerStyle.infoContainer}>
        <View style={iconStyle.container}>
          <Feather color={props.iconColor} size={24} name={props.image} />
        </View>

        <View>
          <ThemedText
            style={{ color: "#DDDDDD", fontWeight: 600, fontSize: 18 }}
          >
            {props.title}
          </ThemedText>
          <View>
            {props.tags.map((tag, idx) => (
              <ThemedText key={idx} style={{ fontWeight: 400, fontSize: 14 }}>
                #{tag}
              </ThemedText>
            ))}
          </View>
        </View>
      </View>
      <View style={containerStyle.amountContainer}>
        <View style={containerStyle.dateContainer}>
          <ThemedText style={{ marginRight: 4 }}>{props.dateTime}</ThemedText>
          <Feather color={"#808080"} size={24} name={props.transactionType} />
        </View>
        <View>
          <ThemedText style={{ fontSize: 18, fontWeight: 600, color: "#ddd" }}>
            ₹{props.amount}
          </ThemedText>
        </View>
      </View>
    </View>
  );
};

export default TransactionCard;
