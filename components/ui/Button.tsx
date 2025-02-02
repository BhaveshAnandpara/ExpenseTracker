import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

type ButtonProps = {
    content : string;
    tint : string;
}

const Button = (props:ButtonProps) => {

    const style = StyleSheet.create({
        button:{
            backgroundColor : props.tint,
            paddingVertical : 12,
            paddingHorizontal : 24,
            alignSelf : 'center',
            borderRadius : 30
        }
    })  

  return (
    <TouchableOpacity style={style.button}  >
            <Text style={{color : '#dddddd' , fontWeight : 600}} >{props.content}</Text>
    </TouchableOpacity>
  )
}

export default Button