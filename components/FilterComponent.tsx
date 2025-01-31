import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ThemedText } from "./ThemedText";

export type FilterComponentProps = {
  id: number;
  text: string;
};

export type FilterComponentActiveProps = {
  active: number;
  onPress: (actievIdx: number) => void;
};

const FilterComponent = (
  props: FilterComponentProps & FilterComponentActiveProps
) => {
  const filterStyle = StyleSheet.create({
    default: {
      alignSelf: "flex-start",
      paddingHorizontal: 24,
      paddingVertical: 10,
      borderRadius: 30,
      borderWidth: 2,
      borderColor: "#7C7C7C",
      marginRight: 12,
      fontSize: 14,
      fontWeight: "500",
    },
  });

  const activeFilterStyle = StyleSheet.create({
    active: {
      ...filterStyle.default,
      borderColor: "#7E44E0",
      backgroundColor: "#7E44E0",
      color: "#C8C8C8",
    },
  });

  return (
    <ThemedText
      style={
        props.active === props.id
          ? activeFilterStyle.active
          : filterStyle.default
      }
      onPress={() => props.onPress(props.id)}
    >
      {props.text}
    </ThemedText>
  );
};

export default FilterComponent;
