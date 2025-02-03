import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import FilterComponent, { FilterComponentProps } from "../FilterComponent";
import moment from "moment-timezone";
import DateTimePIcker from "../DateTimePIcker";

type FilterContainerProps = {
  data: FilterComponentProps[];
  onChangeDate ?: React.Dispatch<React.SetStateAction<Date>>;
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

  const onPress = (newActiveIdx: number , days : number | undefined | null ) => {
    setActiveIdx(newActiveIdx);

    let deadline = moment.tz('Asia/Kolkata');
    console.log(days);

    //next Salary
    if( days === undefined) {
        // Next Date of Salary
    }
    else{
      deadline.add(days ,'days');
    }

    props.onChangeDate && props.onChangeDate(deadline.toDate())
  };

  return (
    <View style={filterConStyle.container}>
      {data.map((data, idx) => (
        <TouchableOpacity key={idx}>
          <FilterComponent
            onPress={onPress}
            id={data.id}
            active={activeIdx}
            text={data.text}
            days={data.days}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default FilterContainer;
