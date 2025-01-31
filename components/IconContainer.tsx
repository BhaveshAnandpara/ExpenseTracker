import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { ThemedText } from "./ThemedText";
import { Feather } from "@expo/vector-icons";

type IconContainerProps = {
  title: string;
  content: string;
  image: "arrow-up-right" | "pie-chart";
  iconColor: string;
  tint: string;
  onPress?: () => void;
};

const IconContainer = (props: IconContainerProps) => {
  const containerStyle = StyleSheet.create({
    container: {
      flexDirection: "row",
    },
  });

  const iconStyle = StyleSheet.create({
    container: {
      backgroundColor: props.tint,
      alignSelf: "center",
      padding: 12,
      borderRadius: 100,
      marginRight: 12,
    },
  });

  const contentStyle = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    title: {
      fontWeight: 500,
    },
    content: {
      alignSelf: "center",
      fontSize: 24,
      color: "#DCDCDC",
      marginTop: 8,
      fontWeight: 700,
    },
  });

  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={containerStyle.container}>
        <View style={iconStyle.container}>
          <Feather color={props.iconColor} size={24} name={props.image} />
        </View>

        <View style={contentStyle.container}>
          <ThemedText style={contentStyle.title}>{props.title}</ThemedText>
          <ThemedText style={contentStyle.content}>{props.content}</ThemedText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default IconContainer;
