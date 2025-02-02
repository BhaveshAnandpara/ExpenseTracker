import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import React from 'react'
import BankType from '@/components/BankType'
import CategoryBottomSheet from '@/components/CategoryBottomSheet'
import { CategotyComponentProps } from '@/components/CategotyComponent'
import TagsContainer from '@/components/containers/TagsContainer'
import NotesComponent from '@/components/NotesComponent'
import ShowCategory from '@/components/ShowCategory'
import TagsBottomSheet from '@/components/TagsBottomSheet'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import TransactionType from '@/components/TransactionType'
import { PaperProvider } from 'react-native-paper'
import Button from '@/components/ui/Button'
import DateTimePIcker from '@/components/DateTimePIcker'
import { BankName } from '@/constants/Banks'

const createTransaction = () => {
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
      backgroundColor: '#222', // Dark background
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 8,
      marginTop: '10%',
      marginBottom: 24
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 5
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

  const [transactionType, setTransactionType] = React.useState('expense')
  const [visible, setVisible] = React.useState(false)
  const [isTagModalVisible, setIsTagModalVisible] = React.useState(false)
  const [categoryData, setCategoryData] =
    React.useState<CategotyComponentProps | null>(null)
  const [tags, setTags] = React.useState<{ [key: string]: string }>({})
  const [showError, setShowError] = React.useState<string | undefined>(
    undefined
  )
  const [notes, setNotes] = React.useState('')
  const [selectedBank, setSelectedBank] = React.useState('CASH')

  const showModal = () => setVisible(true)
  const hideModal = () => setVisible(false)
  const showTagModal = () => setIsTagModalVisible(true)
  const hideTagModal = () => setIsTagModalVisible(false)
  const containerStyle = { backgroundColor: '#dddddd', padding: 20 }

  const selectCategory = (category: CategotyComponentProps) => {
    setCategoryData(category)
    hideModal()
  }

  const createNewTag = (tagName: string) => {
    if (!Object.values(tags).includes(tagName)) {
      let newKey = Object.keys(tags).length + 1

      setTags(prevData => {
        const updatedData = { ...prevData }
        updatedData[newKey] = tagName
        return updatedData
      })
      setShowError(undefined)
      hideTagModal()
    } else {
      setShowError('The tag with same name already exists !')
    }
  }

  const deleteTag = (tagId: string) => {
    delete tags[tagId]

    //  for faster update

    setTags(prevData => {
      const updatedData = { ...prevData }
      delete updatedData[tagId] // Remove the key
      return updatedData
    })
  }

  const onSetNotes = (notes: string) => {
    setNotes(notes)
  }

  const handleTypeChange = (type: string) => {
    setTransactionType(type)
  }

  const banks: BankName[] = [
    'CASH',
    'ICICI',
    'ICICI',
    'ICICI',
    'ICICI',
    'ICICI',
    'ICICI',
    'ICICI',
    'ICICI',
    'ICICI',
    'ICICI'
  ]

  return (
    <PaperProvider>
      <ThemedView style={{ padding: 20 }}>
        {/* Transaction Type */}

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            gap: 12
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

        {/* Transaction Amount */}

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

        {/* Transaction Date */}

        <View style={dateAndTimeCon.container}>
          <View style={dateAndTimeCon.row}>
            <Text style={dateAndTimeCon.label}>Date & Time</Text>
            <DateTimePIcker />
          </View>
          <View style={dateAndTimeCon.separator} />
          <View style={dateAndTimeCon.row}>
            <Text style={dateAndTimeCon.label}>Paid to</Text>
            <TextInput
              style={{
                marginLeft: 6,
                padding: 5,
                fontWeight: 600,
                color: '#ddd',
                fontSize: 16
              }}
              placeholderTextColor='#7c7c7c80'
              placeholder='Enter Name'
            />
          </View>
        </View>

        {/* Banks */}

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            display: 'flex',
            flexDirection: 'row',
            gap: 12,
            marginVertical: 24
          }}
        >
          {banks.map(bank => {
            return <BankType bank={bank} isActive={bank === selectedBank} />
          })}
        </ScrollView>

        {/* Category */}

        <ShowCategory category={categoryData} showModal={showModal} />

        {/* Tags */}

        <TagsContainer
          tags={tags}
          deleteTag={deleteTag}
          showTagModal={showTagModal}
        />

        {/* Notes */}

        <NotesComponent notes={notes} setNotes={onSetNotes} />

        {/* Buttons */}

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

        <TagsBottomSheet
          visible={isTagModalVisible}
          _handleDismiss={hideTagModal}
          createNewTag={createNewTag}
          showError={showError}
        />
      </ThemedView>
    </PaperProvider>
  )
}

export default createTransaction
