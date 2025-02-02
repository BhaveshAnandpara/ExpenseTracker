import { View, Text, StyleSheet, Modal } from 'react-native'
import React from 'react'
import TransactionType from '@/components/TransactionType'
import BankType from '@/components/BankType'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import ShowCategory from '@/components/ShowCategory'
import { PaperProvider, Portal } from 'react-native-paper'
import CategoryBottomSheet from '@/components/CategoryBottomSheet'
import { CategotyComponentProps } from '@/components/CategotyComponent'

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
      marginTop: '10%'
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
  const [categoryData, setCategoryData] = React.useState<CategotyComponentProps | null>(null)

  const showModal = () => setVisible(true)
  const hideModal = () => setVisible(false)
  const containerStyle = { backgroundColor: '#dddddd', padding: 20 }

  const selectCategory = (category: CategotyComponentProps) => {
    setCategoryData(category)
    hideModal()
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

        <ShowCategory category={categoryData} showModal={showModal}  />

        {/* Category Modal */}

        <CategoryBottomSheet
          visible={visible}
          _handleDismiss={hideModal}
          selectCategory={selectCategory}
        />
      </ThemedView>
    </PaperProvider>
  )
}

export default transactionDetails
