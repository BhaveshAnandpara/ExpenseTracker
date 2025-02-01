import { View, StyleSheet, Text } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { FeatherIconName } from "./ui/IconSymbol";
import { ThemedText } from "./ThemedText";
import { ProgressBar } from "react-native-paper";

export type GoalCardProps = {
  iconName: FeatherIconName;
  goalName: string;
  message: string;
  amount: string;
  iconColor: string;
  tint: string;
  progress: number;
};

const GoalCard = (props: GoalCardProps) => {
  const iconStyle = StyleSheet.create({
    container: {
      backgroundColor: props.tint,
      alignSelf: "center",
      padding: 20,
      borderRadius: 10,
      marginRight: 12,
    },
  });

  const containerStyle = StyleSheet.create({
    container:{
        display :'flex',
        flexDirection : 'row',
        justifyContent : 'flex-start',
        backgroundColor : '#7C7C7C33',
        borderRadius : 10,
        padding : 16,
        marginVertical : 8
    },
    contentContainer:{
        display : 'flex',
        flexDirection : 'column',
        flex : 1,
        justifyContent : 'space-between',
    },
    titleContainer:{
        display :'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
    }
  })

  return (
    <View style={containerStyle.container} key={props.goalName} >

      <View style={iconStyle.container}>
        <Feather color={props.iconColor} size={24} name={props.iconName} />
      </View>

      <View style={containerStyle.contentContainer} >
        <View style={containerStyle.titleContainer} >
          <ThemedText style={{ fontSize : 18 , fontWeight : 600, alignSelf : 'center' }} >{props.goalName}</ThemedText>
          <ThemedText style={{ fontSize : 18 , fontWeight : 600, alignSelf : 'center' }} >₹{props.amount}</ThemedText>
        </View>
        <View style={{ marginTop : 16 }} >
          <ProgressBar style={ { backgroundColor : '#424242' , height : 8 , borderRadius : 8 } }  progress={props.progress} color={props.tint} />
          <ThemedText style={{fontWeight : 400 , color : "#797979" , marginTop : 4}} > {props.message}</ThemedText>
        </View>
      </View>
    </View>
  );
};

export default GoalCard;
