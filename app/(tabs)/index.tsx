import {
  Image,
  StyleSheet,
  Platform,
  SafeAreaView,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native'

import ParallaxScrollView from '@/components/ParallaxScrollView'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import Header from '@/components/Header'
import FilterContainer from '@/components/containers/FilterContainer'
import { FilterComponentProps } from '@/components/FilterComponent'
import IconContainer from '@/components/IconContainer'
import TransactionContainer from '@/components/containers/TransactionContainer'
import { TransactionCardProps } from '@/components/TransactionCard'
import { IconSymbol } from '@/components/ui/IconSymbol'
import { useRouter } from 'expo-router'

export default function HomeScreen () {
  const filterData: FilterComponentProps[] = [
    { id: 0, text: 'Last Salary' },
    { id: 1, text: 'Today' },
    { id: 2, text: '7 Days' },
    { id: 3, text: '15 Days' },
    { id: 4, text: '30 Days' }
  ]

  const transactionData: TransactionCardProps[] = [
    {
      iconColor: '#3A6763',
      image: 'shopping-bag',
      tint: '#6E9995',
      title: 'New Bharat Supe',
      tags: ['groceries'],
      dateTime: 'Today',
      transactionType: 'arrow-up-right',
      amount: '160'
    },
    {
      iconColor: '#3A6763',
      image: 'shopping-bag',
      tint: '#6E9995',
      title: 'New Bharat Supe',
      tags: ['groceries'],
      dateTime: 'Today',
      transactionType: 'arrow-up-right',
      amount: '160'
    },
    {
      iconColor: '#3A6763',
      image: 'shopping-bag',
      tint: '#6E9995',
      title: 'New Bharat Supe',
      tags: ['groceries'],
      dateTime: 'Today',
      transactionType: 'arrow-up-right',
      amount: '160'
    },
    {
      iconColor: '#3A6763',
      image: 'shopping-bag',
      tint: '#6E9995',
      title: 'New Bharat Supe',
      tags: ['groceries'],
      dateTime: 'Today',
      transactionType: 'arrow-up-right',
      amount: '160'
    },
    {
      iconColor: '#3A6763',
      image: 'shopping-bag',
      tint: '#6E9995',
      title: 'New Bharat Supe',
      tags: ['groceries'],
      dateTime: 'Today',
      transactionType: 'arrow-up-right',
      amount: '160'
    },
    {
      iconColor: '#3A6763',
      image: 'shopping-bag',
      tint: '#6E9995',
      title: 'New Bharat Supe',
      tags: ['groceries'],
      dateTime: 'Today',
      transactionType: 'arrow-up-right',
      amount: '160'
    }
  ]

  const router = useRouter()

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
    >
      {/* Header */}

      <ThemedView style={{ padding: 20 }}>
        <Header title='30 Oct- 31 Oct' iconName='settings' />
      </ThemedView>

      {/* Expense */}

      <ThemedView style={{ marginTop: '15%' }}>
        <ThemedText style={{ textAlign: 'center' }}>Expense</ThemedText>
        <ThemedText
          type='title'
          style={{
            textAlign: 'center',
            lineHeight: 48,
            marginTop: 16,
            color: 'white',
            fontSize: 48
          }}
        >
          ₹ 62,775
        </ThemedText>
      </ThemedView>

      {/* Filter */}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: '8%', padding: 12 }}
      >
        <FilterContainer data={filterData} />
      </ScrollView>

      {/* Icon Containers */}

      <ThemedView
        style={{
          marginTop: '8%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20
        }}
      >
        <IconContainer
          image='arrow-up-right'
          content='₹ 70,000'
          tint='#DDDDDD'
          title='Income'
          iconColor='black'
        />
        <IconContainer
          image='pie-chart'
          content='Trends'
          tint='#DDDDDD'
          title='Explore'
          iconColor='black'
        />
      </ThemedView>

      {/* Recent Transactions */}

      <ThemedView style={{ marginTop: '6%', paddingHorizontal: 12 }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <ThemedText style={{ color: '#BEA8E2', fontWeight: 500 }}>
            Recent Transactions
          </ThemedText>

          <TouchableOpacity
            onPress={() => router.push('/createTransaction?id=123')}
          >
            <View
              style={{
                backgroundColor: '#7E44E080',
                paddingHorizontal: 12,
                paddingVertical: 8,
                borderRadius: 24,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                paddingRight: 20
              }}
            >
              <IconSymbol color={'#dddddd80'} name='plus' />
              <ThemedText
                style={{ color: '#dddddd80', fontWeight: 500, marginLeft: 4 }}
              >
                Add
              </ThemedText>
            </View>
          </TouchableOpacity>
        </View>

        <TransactionContainer data={transactionData} />
      </ThemedView>
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
