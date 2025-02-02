import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { FeatherIconName } from './ui/IconSymbol'
import { ThemedText } from './ThemedText'

export type CategotyComponentProps = {
  iconName: FeatherIconName
  iconColor: string
  tint: string
  categoryName: string
  key?: number
}

export type ActionCategotyComponentProps = {
  selectCategory: (category: CategotyComponentProps) => void
}

export function CategotyComponent (
  props: CategotyComponentProps & ActionCategotyComponentProps
) {
  const iconStyle = StyleSheet.create({
    container: {
      backgroundColor: props.tint,
      alignSelf: 'center',
      padding: 16,
      borderRadius: 10,
      marginBottom: 4
    }
  })

  const containerStyle = StyleSheet.create({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '25%',
      marginVertical: 16
    }
  })

  return (
    <TouchableOpacity
      onPress={() => props.selectCategory({ ...props })}
      style={containerStyle.container}
      key={props.key}
    >
      <View style={iconStyle.container}>
        <Feather color={props.iconColor} size={24} name={props.iconName} />
      </View>
      <ThemedText style={{ fontWeight: 600 }}>{props.categoryName}</ThemedText>
    </TouchableOpacity>
  )
}
