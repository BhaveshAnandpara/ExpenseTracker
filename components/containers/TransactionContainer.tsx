import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import TransactionCard, { TransactionCardProps } from "../TransactionCard";

type TransactionContainerProps = {
  data: TransactionCardProps[];
};

const TransactionContainer = (props: TransactionContainerProps) => {
  return (
    <View>
      {props.data.map((card) => (
        <TouchableOpacity>
            <TransactionCard {...card} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TransactionContainer;
