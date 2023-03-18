import { ResizeMode, Video } from 'expo-av'
import { SafeAreaView, Text, View, StyleSheet, Image } from 'react-native'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '../../../App'

interface Item {
  source: {
    uri: string
  }
}

// in the destination screen
interface StoryProps {
  route: RouteProp<RootStackParamList, 'Story'>
}

export default function Story({ route }: StoryProps) {
  const { item } = route.params
  console.log(item)
  return (
    // <SafeAreaView>
    <View style={styles.container}>
      {item.type === 'image' ? (
        <Image source={item.source} style={{ width: '100%', height: '100%' }} />
      ) : (
        <Video
          resizeMode={ResizeMode.CONTAIN}
          source={item.source}
          style={{ width: '100%', height: '100%' }}
          shouldPlay={true}
        />
      )}
    </View>
    // </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
})
