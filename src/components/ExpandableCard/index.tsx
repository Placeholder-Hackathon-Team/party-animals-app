import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../constants/colors'
import CircleImage from '../Image'
import FavoriteIcon from '../FavoriteIcon'
import StoryCarousel from '../Carousel'

const ExpandableCard = ({ selectedObj }: { selectedObj: any }) => {
  const [expanded, setExpanded] = useState(false)
  const [animation] = useState(new Animated.Value(0))

  const toggleExpansion = () => {
    setExpanded(!expanded)

    Animated.timing(animation, {
      toValue: expanded ? 0 : 190,
      duration: 300,
      useNativeDriver: false,
    }).start()
  }

  const contentHeight = animation.interpolate({
    inputRange: [0, 190],
    outputRange: [0, 300],
  })

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleExpansion}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Ionicons name={!expanded ? 'chevron-up' : 'chevron-down'} size={24} color={COLORS.gray} />
        </View>
      </TouchableOpacity>

      <View style={styles.mainInfoContainer}>
        <View>
          <CircleImage
            source={{
              uri: 'https://st.depositphotos.com/1053646/1770/i/950/depositphotos_17700789-stock-photo-dance-club.jpg',
            }}
          />
        </View>

        <View style={{ paddingRight: 24 }}>
          <View
            style={{
              paddingBottom: 0,
              marginLeft: 16,
              marginRight: 24,
              borderBottomColor: COLORS.primary,
              borderBottomWidth: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              height: 48,
            }}
          >
            <View>
              <Text style={styles.titleText}>{selectedObj.name}</Text>
              <Text style={styles.addressText}>{selectedObj.address}</Text>
            </View>

            <View>
              <FavoriteIcon />
            </View>
          </View>

          <View style={{ marginLeft: 16, flexDirection: 'row', justifyContent: 'space-between', width: '67.5%' }}>
            <View>
              <Text style={styles.moreInfoTitle}>Opening hours</Text>
              <Text style={styles.moreInfoText}>{selectedObj.workingHours}</Text>
            </View>

            <View>
              <Text style={styles.moreInfoTitle}>Entrance</Text>
              <Text style={styles.moreInfoText}>{selectedObj.entryPrice} BGN</Text>
            </View>
          </View>
        </View>
      </View>

      <Animated.View style={{ height: contentHeight, overflow: 'hidden', padding: 20 }}>
        <StoryCarousel />
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: COLORS.dark,
    borderRadius: 31,
    padding: 24,
    paddingTop: 0,
    paddingBottom: 0,
  },
  mainInfoContainer: {
    marginTop: 16,
    display: 'flex',
    flexDirection: 'row',
  },
  titleText: {
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 24,
    color: COLORS.gray,
  },
  addressText: {
    fontWeight: '400',
    fontSize: 12,
    color: COLORS.secondaryGray,
  },
  moreInfoTitle: {
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 22,
    color: COLORS.secondaryGray,
  },
  moreInfoText: {
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 22,
    color: COLORS.gray,
  },
})

export default ExpandableCard
