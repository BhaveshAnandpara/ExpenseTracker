import { View, Text, StyleSheet } from "react-native";
import React from "react";
import TagsComponent from "../TagsComponent";

const TagsContainer = (props: {
  tags: { [key: string]: string };
  deleteTag: (tagName: string) => void;
}) => {
  const containerStyle = StyleSheet.create({
    container: {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row",
      backgroundColor: "#7C7C7C33",
      paddingVertical: 24,
      paddingHorizontal: 12,
      gap: 12,
      borderRadius: 10,
    },
  });

  return (
    <View style={containerStyle.container}>
      {Object.keys(props.tags).map((key) => {
        return (
          <TagsComponent
            tagName={props.tags[key]}
            tagId={key}
            key={key}
            deleteTag={props.deleteTag}
          />
        );
      })}
    </View>
  );
};

export default TagsContainer;
