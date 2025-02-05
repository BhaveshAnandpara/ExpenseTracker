import {
  Image,
  StyleSheet,
  Platform,
  View,
  TouchableOpacity
} from 'react-native'

import { HelloWave } from '@/components/HelloWave'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import GoalsContainer from '@/components/containers/GoalsContainer'
import { GoalCardProps } from '@/components/GoalCard'
import Header from '@/components/Header'
import CategoryContainer from '@/components/containers/CategoryContainer'
import { CategotyComponentProps } from '@/components/CategotyComponent'
import { router } from 'expo-router'

export default function HomeScreen () {
  const setNewCtaegory = () => {
    console.log('new goal')
  }

  const buttonStyle = StyleSheet.create({
    primary: {
      width: '100%',
      textAlign: 'center',
      paddingVertical: 12,
      borderRadius: 36,
      backgroundColor: '#7E44E0',
      color: '#ddd'
    }
  })

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
    }
  ]

  const incomeCategoryData: CategotyComponentProps[] = [
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
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
    >
      {/* Header */}

      <ThemedView style={{ padding: 20 }}>
        <Header title='Categories' iconName='settings' />
      </ThemedView>

      {/* Set new categories button */}

      <ThemedView>
        <TouchableOpacity onPress={() => router.push('/createCategory')}>
          <ThemedText style={buttonStyle.primary}>Add New Category</ThemedText>
        </TouchableOpacity>
      </ThemedView>

      {/* Expense */}

      <View style={{ marginTop: '4%' }}>
        <ThemedText style={{ fontWeight: 600 }}> Expenses</ThemedText>
        <View>
          <CategoryContainer
            selectCategory={() => {}}
            data={expenseCategoryData}
          />
        </View>
      </View>

      {/* Income */}

      <View style={{ marginTop: '4%' }}>
        <ThemedText style={{ fontWeight: 600 }}> Income</ThemedText>
        <View>
          <CategoryContainer
            selectCategory={() => {}}
            data={incomeCategoryData}
          />
        </View>
      </View>
    </ParallaxScrollView>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute'
  }
})
