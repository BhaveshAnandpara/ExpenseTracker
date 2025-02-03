import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { ThemedView } from '@/components/ThemedView'
import TransactionType from '@/components/TransactionType'
import Button from '@/components/ui/Button'

const createCategory = () => {
  const [transactionType, setTransactionType] = React.useState('expense')
  const [tint, setTint] = React.useState('')

  const handleTypeChange = (type: string) => {
    setTransactionType(type)
  }

  const tints = [
    '#9B7071',
    '#9B7071',
    '#9B7071',
    '#9B7071',
    '#9B7071',
    '#9B7071',
    '#9B7071',
    '#9B7071',
    '#9B7071'
  ]

  return (
    <View>
      <ThemedView style={{ padding: 20 }}>
        {/* Transaction Type */}

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            gap: 12,
            marginBottom: 36
          }}
        >
          <TransactionType
            transactionType='expense'
            handleTypeChange={handleTypeChange}
            isActive={'expense' === transactionType}
          />
          <TransactionType
            transactionType='income'
            handleTypeChange={handleTypeChange}
            isActive={'income' === transactionType}
          />
        </View>

        {/* Category Name */}

        <TextInput
          style={{
            borderRadius: 6,
            backgroundColor: '#7C7C7C33',
            fontWeight: 600,
            color: '#ddd',
            fontSize: 16,
            paddingHorizontal: 12,
            paddingVertical: 16,
            marginBottom: 12
          }}
          placeholderTextColor='#7c7c7c80'
          placeholder='Category Name'
        />

        <ThemedView
          style={{
            borderRadius: 6,
            backgroundColor: '#7C7C7C33',
            paddingHorizontal: 12,
            paddingVertical: 16,
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            gap: 24
          }}
        >
          {tints.map(tint => {
            return (
              <TouchableOpacity onPress={() => setTint(tint)}>
                <View
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 4,
                    backgroundColor: tint
                  }}
                ></View>
              </TouchableOpacity>
            )
          })}
        </ThemedView>

        {/* Save Button */}

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
      </ThemedView>
    </View>
  )
}

export default createCategory
