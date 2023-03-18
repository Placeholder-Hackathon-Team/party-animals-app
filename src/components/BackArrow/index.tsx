import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons' // Or any other icon library you prefer

function BackArrow() {
  const navigation = useNavigation()

  const handlePress = () => {
    navigation.goBack()
  }

  return (
    <TouchableOpacity onPress={handlePress} style={styles.arrow}>
      <Ionicons name="ios-arrow-back" size={24} color="white" />
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  arrow: {
    position: 'absolute',
    left: '7%',
    top: '7%',
  },
})

export default BackArrow
