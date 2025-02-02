import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { IconSymbol } from './ui/IconSymbol'

interface TransactionTypeProps {
  transactionType: 'expense' | 'income' // Define possible types
  isActive?: boolean
  handleTypeChange: (type: string) => void
}

const TransactionType = (props: TransactionTypeProps) => {
  const styles = StyleSheet.create({
    default: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#7E44E000',
      borderRadius: 24,
      alignSelf: 'flex-start',
      paddingHorizontal: 20,
      paddingVertical: 12,
      borderWidth: 2,
      borderColor: '#7c7c7c'
    },
    active: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#7E44E0',
      borderRadius: 24,
      alignSelf: 'flex-start',
      paddingHorizontal: 20,
      paddingVertical: 12,
      borderWidth: 2,
      borderColor: '#7E44E0'
    },
    iconContainer: {
      marginRight: 8,
      backgroundColor: props.isActive ? 'white' : '#7c7c7c',
      padding: 4,
      borderRadius: 100
    },
    text: {
      color: props.isActive ? 'white' : '#7c7c7c',
      fontSize: 16,
      fontWeight: '600'
    }
  })
  return (
    <TouchableOpacity
      onPress={() => props.handleTypeChange(props.transactionType)}
    >
      <View style={props.isActive ? styles.active : styles.default}>
        <View style={styles.iconContainer}>
          <IconSymbol
            size={12}
            name={
              props.transactionType === 'expense' ? 'arrow-down' : 'arrow-up'
            }
            color={props.isActive ? '#7E44E0' : 'black'}
          />
        </View>
        <Text style={styles.text}>
          {props.transactionType.charAt(0).toUpperCase() +
            props.transactionType.slice(1)}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default TransactionType
