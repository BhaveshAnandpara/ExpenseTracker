import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CategotyComponent, {
  CategotyComponentProps,
} from "../CategotyComponent";

type CategoryContainerProps = {
  data: CategotyComponentProps[];
};

const CategoryContainer = (props: CategoryContainerProps) => {

    const containerStyle = StyleSheet.create({
        container:{
            display : 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap', 
            justifyContent: 'flex-start', 
            backgroundColor : '#7C7C7C33',
            borderRadius : 10,
            paddingVertical : 12,
            paddingHorizontal : 12,
            marginTop : '4%'
        }
    })

  return (
    <View style={containerStyle.container} >
      {props.data.map((category) => (
        <CategotyComponent {...category} />
      ))}
    </View>
  );
};

export default CategoryContainer;
