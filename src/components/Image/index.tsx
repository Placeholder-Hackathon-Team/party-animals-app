import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { COLORS } from '../../constants/colors'

const CircleImage: React.FC<{ source: any }> = ({ source }) => {
  return <Image source={source} style={styles.circleImage} />
}

const styles = StyleSheet.create({
  circleImage: {
    borderWidth: 2,
    borderColor: COLORS.primary,
    width: 75,
    height: 75,
    borderRadius: 75 / 2,
  },
})

export default CircleImage
