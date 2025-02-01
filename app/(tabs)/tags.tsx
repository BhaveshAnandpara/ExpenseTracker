import { Image, StyleSheet, Platform, ScrollView, Button } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import Header from "@/components/Header";
import TagsContainer from "@/components/containers/TagsContainer";
import AddTagContainer from "@/components/containers/AddTagContainer";
import { useState } from "react";

export default function HomeScreen() {
  const [tags, setTags] = useState<{ [key: string]: string }>({
    1: "groceries",
    2: "punetrip",
    3: "chai",
    4: "gharKharch",
    5: "Debt",
  });

  const [showError, setShowError] = useState<string | undefined>(undefined);

  const createNewTag = (tagName: string) => {
    if (!Object.values(tags).includes(tagName)) {
      let newKey = Object.keys(tags).length + 1;

      setTags((prevData) => {
        const updatedData = { ...prevData };
        updatedData[newKey] = tagName;
        return updatedData;
      });
      setShowError(undefined);
    } else {
      setShowError("The tag with same name already exists !");
    }
  };

  const deleteTag = (tagId: string) => {
    delete tags[tagId];

    //  for faster update

    setTags((prevData) => {
      const updatedData = { ...prevData };
      delete updatedData[tagId]; // Remove the key
      return updatedData;
    });
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
    >
      {/* Header */}

      <ThemedView style={{ padding: 20 }}>
        <Header title="Tags" iconName="settings" />
      </ThemedView>

      {/* Add new tags */}

      <AddTagContainer createNewTag={createNewTag} showError={showError} />

      {/* Show Tags tags */}
      <TagsContainer tags={tags} deleteTag={deleteTag} />
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
