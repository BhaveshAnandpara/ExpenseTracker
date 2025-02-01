import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { ThemedText } from "./ThemedText";
import { ActivityIndicator, Button } from "react-native-paper";
import { Feather } from "@expo/vector-icons";

export type TagsComponentProps = {
  tagName: string;
  tagId: string;
  key: string;
  deleteTag: (tagName: string) => void;
};

const TagsComponent = (props: TagsComponentProps) => {
  const [showDeleteIcon, setShowDeleteIcon] = useState(false);
  const [deleteInProgress, setDeleteInProgress] = useState(false);

  const tagStyle = StyleSheet.create({
    default: {
      alignSelf: "center",
      paddingHorizontal: 16,
      paddingVertical: 10,
      borderRadius: 30,
      backgroundColor: "#7E44E080",
      fontSize: 16,
      fontWeight: "600",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
  });

  const deleteTagStyle = StyleSheet.create({
    delete: {
      ...tagStyle.default,
      backgroundColor: "#B02A3033",
    },
    icon: {
      marginLeft: 6,
      padding: 12,
      backgroundColor: "#00000033",
      borderRadius: 30,
    },
  });

  return (
    <TouchableOpacity
      onPress={() => {
        !deleteInProgress && setShowDeleteIcon(!showDeleteIcon);
      }}
      style={showDeleteIcon ? deleteTagStyle.delete : tagStyle.default}
      key={props.tagId}
    >
      <ThemedText style={{ color: "#ddd" }}>#{props.tagName}</ThemedText>
      {showDeleteIcon && !deleteInProgress && (
        <TouchableOpacity
          style={deleteTagStyle.icon}
          onPress={() => {
            setDeleteInProgress(true);
            props.deleteTag(props.tagId);
            setDeleteInProgress(false);
          }}
        >
          <Feather color={"white"} size={14} name="trash-2" />
        </TouchableOpacity>
      )}
      {deleteInProgress && (
        <ActivityIndicator
          style={deleteTagStyle.icon}
          color={"white"}
          size={14}
          animating
        />
      )}
    </TouchableOpacity>
  );
};

export default TagsComponent;
