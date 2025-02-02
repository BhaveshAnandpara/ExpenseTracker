import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TextInput
} from 'react-native'
import React from 'react'
import TransactionType from '@/components/TransactionType'
import BankType from '@/components/BankType'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import ShowCategory from '@/components/ShowCategory'
import { PaperProvider, Portal } from 'react-native-paper'
import CategoryBottomSheet from '@/components/CategoryBottomSheet'
import { CategotyComponentProps } from '@/components/CategotyComponent'
import TagsContainer from '@/components/containers/TagsContainer'
import TagsBottomSheet from '@/components/TagsBottomSheet'
import { IconSymbol } from '@/components/ui/IconSymbol'
import NotesComponent from '@/components/NotesComponent'
import Button from '@/components/ui/Button'

const transactionDetails = () => {
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

  const [visible, setVisible] = React.useState(false)
  const [isTagModalVisible, setIsTagModalVisible] = React.useState(false)
  const [categoryData, setCategoryData] =
    React.useState<CategotyComponentProps | null>(null)
  const [tags, setTags] = React.useState<{ [key: string]: string }>({
    1: 'groceries',
    2: 'punetrip',
    3: 'chai',
    4: 'gharKharch',
    5: 'Debt'
  })
  const [showError, setShowError] = React.useState<string | undefined>(
    undefined
  )
  const [notes, setNotes] = React.useState('')

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

  return (
    <PaperProvider>
      <ThemedView style={{ padding: 20 }}>
        {/* Transaction Type */}

        <TransactionType transactionType='expense' />

        {/* Transaction Amount */}

        <View style={style.amountContainer}>
          <ThemedText type='title' style={{ color: '#ddd', lineHeight: 42 }}>
            ₹ 160
          </ThemedText>
          <BankType bank='ICICI' />
        </View>

        {/* Transaction Date */}

        <View style={dateAndTimeCon.container}>
          <View style={dateAndTimeCon.row}>
            <Text style={dateAndTimeCon.label}>Date & Time</Text>
            <Text style={dateAndTimeCon.value}>31 Oct, 6.23 PM</Text>
          </View>
          <View style={dateAndTimeCon.separator} />
          <View style={dateAndTimeCon.row}>
            <Text style={dateAndTimeCon.label}>Paid to</Text>
            <Text style={dateAndTimeCon.boldValue}>New Bharat Shopee</Text>
          </View>
        </View>

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

        <View style={{ display : 'flex' , alignItems : 'center' , justifyContent : 'flex-start' , gap :12 , flexDirection : 'row' , marginTop : 24 }} >

            <Button content='Save' tint='#7E44E0' />
            <Button content='Disable' tint='#90825A' />
            <Button content='Delete' tint='#673A3A' />

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

export default transactionDetails
