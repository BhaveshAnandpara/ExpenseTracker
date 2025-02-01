import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { ThemedText } from "../ThemedText";
import { Button } from "react-native-paper";

type AddTagContainerProps = {
  createNewTag: (tag: string) => void;
  showError: string | undefined;
};

const AddTagContainer = (props: AddTagContainerProps) => {
  const [tag, setTag] = useState("");

  const inputStyleContainer = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      backgroundColor: "#7C7C7C33",
      paddingVertical: 12,
      paddingHorizontal: 12,
      gap: 12,
      borderRadius: 10,
    },
    addButton: {
      backgroundColor: "#00000080",
      paddingVertical: 8,
      paddingHorizontal: 24,
      borderRadius: 30,
      fontWeight: 600,
    },
  });

  return (
    <>
      <View style={inputStyleContainer.container}>
        <Feather color={"#7c7c7c"} size={24} name={"tag"} />
        <TextInput
          style={{
            marginLeft: 6,
            height: 40,
            padding: 5,
            fontWeight: 600,
            color: "#ddd",
            flex: 1,
          }}
          placeholderTextColor="#7c7c7c80"
          placeholder="Create new tag"
          onChangeText={setTag}
        />
        <Button
          onPress={() => {
            props.createNewTag(tag);
          }}
          style={inputStyleContainer.addButton}
        >
          <ThemedText style={{ color: "#dddddd80" }}>Add</ThemedText>
        </Button>
        ;
      </View>
      {props.showError && (
        <Text style={{ color: "#B02A30" }}>{props.showError}</Text>
      )}
    </>
  );
};

export default AddTagContainer;
