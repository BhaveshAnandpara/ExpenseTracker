import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { CategotyComponentProps, CategotyComponent } from '../CategotyComponent'

type CategoryContainerProps = {
  data: CategotyComponentProps[]
  selectCategory: (category: CategotyComponentProps) => void
}

const CategoryContainer = (props: CategoryContainerProps) => {
  const containerStyle = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      backgroundColor: '#7C7C7C33',
      borderRadius: 10,
      paddingVertical: 12,
      paddingHorizontal: 12,
      marginTop: '4%'
    }
  })

  return (
    <View style={containerStyle.container}>
      {props.data.map((category, idx) => (
        <CategotyComponent
          key={idx}
          {...category}
          selectCategory={props.selectCategory}
        />
      ))}
    </View>
  )
}

export default CategoryContainer
