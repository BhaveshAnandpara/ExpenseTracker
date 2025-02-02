import {
  Image,
  StyleSheet,
  Platform,
  ScrollView,
  Button,
  TouchableOpacity
} from 'react-native'

import ParallaxScrollView from '@/components/ParallaxScrollView'
import { ThemedView } from '@/components/ThemedView'
import Header from '@/components/Header'
import { ThemedText } from '@/components/ThemedText'
import GoalsContainer from '@/components/containers/GoalsContainer'
import { GoalCardProps } from '@/components/GoalCard'
import { useRouter } from 'expo-router'

export default function HomeScreen () {
  const setNewGoal = () => {
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

  const goalsData: GoalCardProps[] = [
    {
      iconName: 'compass',
      goalName: 'Goa Trip',
      message: 'save ₹ 20,000 by 1 Feb',
      amount: '30,000',
      iconColor: '#365E37',
      tint: '#6E9974',
      progress: 0.4
    },
    {
      iconName: 'compass',
      goalName: 'Goa Trip',
      message: 'save ₹ 20,000 by 1 Feb',
      amount: '30,000',
      iconColor: '#365E37',
      tint: '#6E9974',
      progress: 0.4
    },
    {
      iconName: 'compass',
      goalName: 'Goa Trip',
      message: 'save ₹ 20,000 by 1 Feb',
      amount: '30,000',
      iconColor: '#365E37',
      tint: '#6E9974',
      progress: 0.4
    }
  ]

  const router = useRouter()

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
    >
      {/* Header */}

      <ThemedView style={{ padding: 20 }}>
        <Header title='Your Goals' iconName='settings' />
      </ThemedView>

      {/* Set new goals button */}

      <ThemedView>
        <TouchableOpacity onPress={()=>router.navigate('/createGoal')} >
          <ThemedText style={buttonStyle.primary}>
            Set New Goals
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>

      {/* List of Goal cards */}

      <GoalsContainer data={goalsData} />
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
