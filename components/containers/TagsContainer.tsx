import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import TagsComponent from '../TagsComponent'
import { IconSymbol } from '../ui/IconSymbol'
import { ThemedText } from '../ThemedText'

type TagsContainerProps = {
  tags: { [key: string]: string }
  deleteTag: (tagName: string) => void
  showTagModal?: () => void
}

const TagsContainer = (props: TagsContainerProps) => {
  const containerStyle = StyleSheet.create({
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
    <View style={containerStyle.container}>
      {props.showTagModal && (
        <View style={containerStyle.header}>
          <View style={containerStyle.icon}>
            <IconSymbol style={{ marginRight: 8 }} name='tag' color='#7c7c7c' />
            <ThemedText>Tags</ThemedText>
          </View>

          <View>
            <TouchableOpacity onPress={props.showTagModal}>
              <IconSymbol name='plus' color='#7c7c7c' />
            </TouchableOpacity>
          </View>
        </View>
      )}
      {Object.keys(props.tags).map(key => {
        return (
          <TagsComponent
            tagName={props.tags[key]}
            tagId={key}
            key={key}
            deleteTag={props.deleteTag}
          />
        )
      })}
    </View>
  )
}

export default TagsContainer
