import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { ThemedText } from '@/components/ThemedText'
import DateTimePIcker from '@/components/DateTimePIcker'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import CategoryBottomSheet from '@/components/CategoryBottomSheet'
import ShowCategory from '@/components/ShowCategory'
import { CategotyComponentProps } from '@/components/CategotyComponent'
import { ThemedView } from '@/components/ThemedView'
import Button from '@/components/ui/Button'

const createGoal = () => {
  const style = StyleSheet.create({
    amountContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: '10%'
    }
  })

  const dateAndTimeCon = StyleSheet.create({
    container: {
      paddingVertical: 10,
      borderRadius: 8,
      marginTop: '10%',
      marginBottom: 24
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 5,
      paddingHorizontal: 12
    },
    label: {
      color: '#bbb', // Light grey text
      fontSize: 14
    },
    value: {
      color: '#ddd', // Slightly brighter text
      fontSize: 14,
      fontWeight: '600'
    },
    boldValue: {
      color: '#bbb', // Similar grey color
      fontSize: 14,
      fontWeight: 'bold'
    },
    separator: {
      borderBottomWidth: 1,
      borderBottomColor: '#444', // Thin separator line
      marginVertical: 5
    }
  })

  const [visible, setVisible] = React.useState(false)

  const [goalName, setGoalName] = useState('')
  const [categoryData, setCategoryData] =
    React.useState<CategotyComponentProps | null>(null)

  const showModal = () => setVisible(true)
  const hideModal = () => setVisible(false)

  const selectCategory = (category: CategotyComponentProps) => {
    setCategoryData(category)
    hideModal()
  }

  return (
    <ThemedView style={{ padding: 20 }}>
      {/* Goal Amount */}

      <View style={style.amountContainer}>
        <ThemedText style={{ color: '#ddd', lineHeight: 42, fontSize: 32 }}>
          ₹
        </ThemedText>
        <TextInput
          keyboardType='numeric'
          style={{
            marginLeft: 6,
            padding: 5,
            fontWeight: 600,
            color: '#ddd',
            flex: 1,
            fontSize: 32
          }}
          placeholderTextColor='#7c7c7c80'
          placeholder='Enter Amount'
        />
      </View>

      {/* Deadline */}

      <View style={dateAndTimeCon.container}>
        <View style={dateAndTimeCon.row}>
          <Text style={dateAndTimeCon.label}>Deadline</Text>
          <DateTimePIcker />
        </View>
        <View style={dateAndTimeCon.separator} />
      </View>

      {/* Goal Name */}

      <TextInput
        style={{
          borderRadius: 6,
          backgroundColor: '#7C7C7C33',
          fontWeight: 600,
          color: '#ddd',
          fontSize: 16,
          paddingHorizontal: 12,
          paddingVertical: 16
        }}
        placeholderTextColor='#7c7c7c80'
        placeholder='Goal Name'
      />

      {/* Category */}

      <ShowCategory category={categoryData} showModal={showModal} />

      {/* Save */}

      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: 12,
          flexDirection: 'row',
          marginTop: 24
        }}
      >
        <Button content='Save' tint='#7E44E0' />
      </View>

      {/* Category Modal */}

      <CategoryBottomSheet
        visible={visible}
        _handleDismiss={hideModal}
        selectCategory={selectCategory}
      />
    </ThemedView>
  )
}

export default createGoal
