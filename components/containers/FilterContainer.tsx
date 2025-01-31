import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import FilterComponent, { FilterComponentProps } from "../FilterComponent";

type FilterContainerProps = {
  data: FilterComponentProps[];
};

const FilterContainer = (props: FilterContainerProps) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [data, setData] = useState(props.data);

  const filterConStyle = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
    },
  });

  const onPress = (newActiveIdx: number) => {
    setActiveIdx(newActiveIdx);
  };

  return (
    <View style={filterConStyle.container}>
      {data.map((data, idx) => (
        <TouchableOpacity>
          <FilterComponent
            onPress={onPress}
            id={data.id}
            active={activeIdx}
            text={data.text}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default FilterContainer;
