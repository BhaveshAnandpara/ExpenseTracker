import { View, Text } from "react-native";
import React from "react";
import GoalCard, { GoalCardProps } from "../GoalCard";

type GoalsContainerProps = {
  data: GoalCardProps[];
};

const GoalsContainer = (props: GoalsContainerProps) => {
  return (
    <View style={{ marginTop : "4%" }} >
      {props.data.map((goal) => (
        <GoalCard {...goal} />
      ))}
    </View>
  );
};

export default GoalsContainer;
