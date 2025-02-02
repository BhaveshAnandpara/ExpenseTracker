import {
  View,
  Text,
  Modal,
  StyleSheet,
  Dimensions,
  ScrollView
} from 'react-native'
import React from 'react'
import Header from './Header'
import CategoryContainer from './containers/CategoryContainer'
import AddTagContainer from './containers/AddTagContainer'

type TagsBottomSheetProps = {
  visible: boolean
  _handleDismiss: () => void
  createNewTag: (tagName: string) => void
  showError: string | undefined
}

const TagsBottomSheet = (props: TagsBottomSheetProps) => {
  const windowHeight = Dimensions.get('window').height
  return (
    <View>
      <Modal
        animationType='slide'
        transparent={true}
        visible={props.visible}
        onRequestClose={props._handleDismiss}
      >
        <View style={[styles.bottomSheet, { height: windowHeight * 0.2 }]}>
          <Header
            title='Select Category'
            iconName='x'
            action={props._handleDismiss}
          />
          <View style={{ marginTop : 12 , width : '100%' }} >
            <AddTagContainer
              createNewTag={props.createNewTag}
              showError={props.showError}
            />
          </View>
        </View>
      </Modal>
    </View>
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

export default TagsBottomSheet
