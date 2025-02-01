import React from 'react'
import { ThemedText } from './ThemedText'
import { Feather } from '@expo/vector-icons'
import { StyleSheet, View } from 'react-native'

const headerStyle = StyleSheet.create({
    header:{
        width : '100%',
        height : 'auto',
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        marginTop : 8
    }
})

const titleStyle = StyleSheet.create({
    title:{
        color : '#808080',
        fontWeight : 600
    }
})

const iconStyle = StyleSheet.create({
    icon:{
        color : '#808080',
    }
})

type HeaderProps ={

    title : string,
    iconName : "settings" | "x",

}


const Header = (props:HeaderProps) => {
  return (
    <View style={headerStyle.header} >
        <ThemedText style={titleStyle.title} >{props.title}</ThemedText>
        <Feather size={16} name={props.iconName} style={iconStyle.icon} />;
    </View>
  )
}

export default Header