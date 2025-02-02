import {
  View,
  Text,
  Modal,
  StyleSheet,
  Animated,
  Dimensions,
  ScrollView
} from 'react-native'
import React from 'react'
import Header from './Header'
import CategoryContainer from './containers/CategoryContainer'
import { CategotyComponentProps } from './CategotyComponent'

type CategoryBottomSheetProps = {
  visible: boolean
  _handleDismiss: () => void
  selectCategory: (category: CategotyComponentProps) => void
}

const CategoryBottomSheet = (props: CategoryBottomSheetProps) => {
  const windowHeight = Dimensions.get('window').height

  const expenseCategoryData: CategotyComponentProps[] = [
    {
      iconName: 'shopping-bag',
      categoryName: 'Groceries',
      iconColor: '#3A6763',
      tint: '#6E9995'
    },
    {
      iconName: 'shopping-bag',
      categoryName: 'Groceries',
      iconColor: '#3A6763',
      tint: '#6E9995'
    },
    {
      iconName: 'shopping-bag',
      categoryName: 'Groceries',
      iconColor: '#3A6763',
      tint: '#6E9995'
    },
    {
      iconName: 'shopping-bag',
      categoryName: 'Groceries',
      iconColor: '#3A6763',
      tint: '#6E9995'
    },
    {
      iconName: 'shopping-bag',
      categoryName: 'Groceries',
      iconColor: '#3A6763',
      tint: '#6E9995'
    },
    {
      iconName: 'shopping-bag',
      categoryName: 'Groceries',
      iconColor: '#3A6763',
      tint: '#6E9995'
    },
    {
      iconName: 'shopping-bag',
      categoryName: 'Groceries',
      iconColor: '#3A6763',
      tint: '#6E9995'
    },
    {
      iconName: 'shopping-bag',
      categoryName: 'Groceries',
      iconColor: '#3A6763',
      tint: '#6E9995'
    },
    {
      iconName: 'shopping-bag',
      categoryName: 'Groceries',
      iconColor: '#3A6763',
      tint: '#6E9995'
    },
    {
      iconName: 'shopping-bag',
      categoryName: 'Groceries',
      iconColor: '#3A6763',
      tint: '#6E9995'
    },
    {
      iconName: 'shopping-bag',
      categoryName: 'Groceries',
      iconColor: '#3A6763',
      tint: '#6E9995'
    },
    {
      iconName: 'shopping-bag',
      categoryName: 'Groceries',
      iconColor: '#3A6763',
      tint: '#6E9995'
    },
    {
      iconName: 'shopping-bag',
      categoryName: 'Groceries',
      iconColor: '#3A6763',
      tint: '#6E9995'
    },
    {
      iconName: 'shopping-bag',
      categoryName: 'Groceries',
      iconColor: '#3A6763',
      tint: '#6E9995'
    },
    {
      iconName: 'shopping-bag',
      categoryName: 'Groceries',
      iconColor: '#3A6763',
      tint: '#6E9995'
    },
    {
      iconName: 'shopping-bag',
      categoryName: 'Groceries',
      iconColor: '#3A6763',
      tint: '#6E9995'
    }
  ]

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={props.visible}
      onRequestClose={props._handleDismiss}
    >
      <View style={[styles.bottomSheet, { height: windowHeight * 0.6 }]}>
        <Header
          title='Select Category'
          iconName='x'
          action={props._handleDismiss}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <CategoryContainer
            data={expenseCategoryData}
            selectCategory={props.selectCategory}
          />
        </ScrollView>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomSheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#2F2F2F',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 23,
    paddingHorizontal: 25,
    bottom: 0,
    borderWidth: 1
  }
})

export default CategoryBottomSheet
