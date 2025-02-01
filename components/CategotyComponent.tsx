import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { FeatherIconName } from "./ui/IconSymbol";
import { ThemedText } from "./ThemedText";

export type CategotyComponentProps = {
  iconName: FeatherIconName;
  iconColor: string;
  tint: string;
  categoryName: string;
};

const CategotyComponent = (props: CategotyComponentProps) => {
  const iconStyle = StyleSheet.create({
    container: {
      backgroundColor: props.tint,
      alignSelf: "center",
      padding: 16,
      borderRadius: 10,
      marginBottom : 4
    },
  });

  const containerStyle = StyleSheet.create({
    container: {
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
        width : '25%',
        marginVertical : 16
    },
  });

  return (
    <View style={containerStyle.container} >
      <View style={iconStyle.container}>
        <Feather color={props.iconColor} size={24} name={props.iconName} />
      </View>
      <ThemedText style={{ fontWeight : 600 }} >{props.categoryName}</ThemedText>
    </View>
  );
};

export default CategotyComponent;
