import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import React from 'react'
import { ThemedText } from './ThemedText'
import { IconSymbol } from './ui/IconSymbol'

type NotesComponentProps = {
  notes: string
  setNotes: (notes: string) => void
}

const NotesComponent = (porps: NotesComponentProps) => {
  const notesContainer = StyleSheet.create({
    container: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor: '#7c7c7c33',
      marginTop: 12,
      padding: 12,
      borderRadius: 8,
      marginBottom : 12
    }
  })

  const notesHeaderContainerStyle = StyleSheet.create({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      backgroundColor: '#7C7C7C33',
      paddingVertical: 24,
      paddingHorizontal: 12,
      gap: 12,
      borderRadius: 10
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      marginBottom: 12
    },
    icon: {
      display: 'flex',
      flexDirection: 'row'
    }
  })

  return (
    <View style={notesContainer.container}>
      <View style={notesHeaderContainerStyle.header}>
        <View style={notesHeaderContainerStyle.icon}>
          <IconSymbol
            style={{ marginRight: 8 }}
            name='clipboard'
            color='#7c7c7c'
          />
          <ThemedText>Notes</ThemedText>
        </View>
      </View>

      <TextInput
        multiline={true}
        numberOfLines={10}
        style={{
          marginTop: 6,
          padding: 0,
          fontWeight: 600,
          color: '#7c7c7c50',
          width: '100%',
          backgroundColor: '#00000000',
          borderWidth: 0
        }}
        placeholderTextColor='#7c7c7c80'
        placeholder='Add Notes...'
      />
    </View>
  )
}

export default NotesComponent
