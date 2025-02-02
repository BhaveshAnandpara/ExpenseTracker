import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconSymbol } from './ui/IconSymbol'
import { CategotyComponentProps } from './CategotyComponent'
import { TextInput } from 'react-native-paper'
import { ThemedText } from './ThemedText'

type showCategoryProps = {
  category: CategotyComponentProps | null
  showModal: () => void
}

const ShowCategory = ({ category, showModal }: showCategoryProps) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#7C7C7C33',
      paddingVertical: 12,
      paddingHorizontal: 15,
      borderRadius: 8,
      width: '100%',
      marginVertical : 12
    },
    icon: {
      marginRight: 8 // Spacing between icon and text
    },
    text: {
      color: '#bbb', // Light grey text
      fontSize: 14,
      fontWeight: 'bold'
    }
  })

  const iconStyle = StyleSheet.create({
    container: {
      backgroundColor: category?.tint,
      alignSelf: 'center',
      padding: 12,
      borderRadius: 10,
      marginRight : 12
    }
  })

  const inputStyle = StyleSheet.create({
    container: {
      display: 'flex',
      flex : 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#53535350', // Dark background
      paddingVertical: 12,
      paddingHorizontal: 15,
      borderRadius: 8,
      width: '100%'
    }
  })

  const containerStyle = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 12,
      borderRadius: 8,
      width: '100%'
    }
  })

  return (
    <View>
      {!category && (
        <TouchableOpacity onPress={showModal}>
          <View style={styles.container}>
            <IconSymbol name='grid' style={styles.icon} color={'#7c7c7c'} />
            <Text style={styles.text}>Category</Text>
          </View>
        </TouchableOpacity>
      )}
      {category && (
        <View style={containerStyle.container} >
          <View style={iconStyle.container}>
            <IconSymbol name={category.iconName} color={category.iconColor} />
          </View>
          <View style={inputStyle.container}>
            <ThemedText>{category.categoryName}</ThemedText>
            <TouchableOpacity onPress={showModal}>
              <IconSymbol name='edit-2' color='#dddddd33' />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  )
}

export default ShowCategory
