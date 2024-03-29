import { ResizeMode, Video } from 'expo-av'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '../../../App'
import { useState } from 'react'
import Carousel from 'react-native-new-snap-carousel'
import BackArrow from '../../components/BackArrow'
import { COLORS } from '../../constants/colors'
import { Entypo, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

function Options() {
  return (
    <TouchableOpacity style={styles.options}>
      <Entypo name="dots-three-horizontal" size={24} color="white" />
    </TouchableOpacity>
  )
}

function LikeButton() {
  const [liked, setLiked] = useState(false)
  return (
    <TouchableOpacity onPress={() => setLiked(!liked)} style={styles.likeBtn}>
      {liked ? (
        <Entypo name="drink" size={28} color={COLORS.primary} />
      ) : (
        <Entypo name="drink" size={28} color="white" />
      )}
    </TouchableOpacity>
  )
}

function FollowButton() {
  const [isChecked, setIsChecked] = useState(false)

  const handlePress = () => {
    setIsChecked(!isChecked)
  }

  return (
    <TouchableOpacity onPress={handlePress} style={{ position: 'absolute', bottom: '-5%', right: '3%' }}>
      <View
        style={{
          width: 18,
          height: 18,
          borderRadius: 18 / 2,
          backgroundColor: COLORS.primary,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {isChecked ? (
          <Ionicons name="checkmark" color="white" size={12} />
        ) : (
          <Ionicons name="add" color="white" size={12} />
        )}
      </View>
    </TouchableOpacity>
  )
}
export const currentUserId = '64162c5a127d1c1ed637de97'
function StoryOwner() {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      style={styles.profilePicContainer}
      // @ts-ignore
      onPress={() => navigation.navigate('Profile', { userId: currentUserId })}
    >
      <View style={styles.profilePicContainer}>
        <Image source={{ uri: 'http://78.83.124.135:5000/rubberduck.png' }} style={styles.profilePic} />
        {/* <FollowButton /> */}
      </View>
    </TouchableOpacity>
  )
}

// in the destination screen
interface StoryProps {
  route: RouteProp<RootStackParamList, 'Story'>
}

export default function Story({ route }: StoryProps) {
  const { items, index } = route.params
  const [i, setI] = useState(index)

  return (
    <View style={styles.container}>
      <Carousel
        onSnapToItem={(i) => setI(i)}
        firstItem={i}
        data={items}
        renderItem={({ item, index }) => {
          const type =
            item.filePath.includes('.png') ||
            item.filePath.includes('.jpeg') ||
            item.filePath.includes('.jpg') ||
            item.filePath.includes('.webp')
              ? 'image'
              : 'video'

          if (type === 'image') {
            return (
              <View style={{ position: 'relative' }}>
                <Image
                  resizeMode="contain"
                  source={{ uri: item?.filePath }}
                  style={{ width: '100%', height: '100%' }}
                />
                <StoryOwner />
                <LikeButton />
                <Options />
              </View>
            )
          } else {
            return (
              <View style={{ position: 'relative' }}>
                <Video
                  resizeMode={ResizeMode.CONTAIN}
                  source={{ uri: item?.filePath }}
                  style={{ width: '100%', height: '100%' }}
                  shouldPlay={i === index}
                />
                <StoryOwner />
                <LikeButton />
                <Options />
              </View>
            )
          }
        }}
        sliderWidth={390}
        itemWidth={390}
        horizontal
        autoplay={true}
      />

      <BackArrow />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
  profilePicContainer: {
    position: 'absolute',
    bottom: '35%',
    right: '3%',
  },
  profilePic: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
  },
  likeBtn: {
    position: 'absolute',
    bottom: '28%',
    right: '5%',
  },
  options: {
    position: 'absolute',
    bottom: '23%',
    right: '5.6%',
  },
})
