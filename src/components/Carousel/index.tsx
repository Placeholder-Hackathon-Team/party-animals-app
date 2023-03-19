import Carousel from 'react-native-new-snap-carousel'
import { ResizeMode, Video } from 'expo-av'
import { Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Item } from '../../../App'

const data = [
  {
    type: 'image',
    source: {
      uri: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
  },
  {
    type: 'video',
    source: {
      uri: 'https://scontent-sof1-2.cdninstagram.com/o1/v/t16/f1/m82/F748DAB6CC836E3D8AB7649F7313268E_video_dashinit.mp4?efg=eyJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSIsInZlbmNvZGVfdGFnIjoidnRzX3ZvZF91cmxnZW4uNDgwLmNsaXBzLmJhc2VsaW5lIn0&_nc_ht=scontent-sof1-2.cdninstagram.com&_nc_cat=107&vs=3268726626723557_3237123814&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9GNzQ4REFCNkNDODM2RTNEOEFCNzY0OUY3MzEzMjY4RV92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVABgkR0NuZTh4TGVoMXVMaWxjRUFMM2lWY1JGMzNCYWJxX0VBQUFGFQICyAEAKAAYABsAFQAAJqq2h4vD9uU%2FFQIoAkMzLBdAOCp%2B%2Bdsi0RgSZGFzaF9iYXNlbGluZV8yX3YxEQB1%2FgcA&ccb=9-4&oh=00_AfDdWmG-j3rGoKgUUKiv4KeXUCRJZ4S9YKTYA_vOg6MTAA&oe=6417C0CE&_nc_sid=1527a3',
    },
  },
  {
    type: 'image',
    source: {
      uri: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
  },
  {
    type: 'image',
    source: {
      uri: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
  },

  // add more items as needed
]

export default function StoryCarousel({ stories }: { stories: any[] }) {
  const navigation = useNavigation()

  const handleOpen = (index: number) => {
    // @ts-ignore
    navigation.navigate('Story', { items: stories, index })
  }

  return (
    <Carousel
      data={stories}
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
            <TouchableOpacity onPress={() => handleOpen(index)} activeOpacity={1}>
              <Image source={{ uri: item.filePath }} style={{ width: '100%', height: 263, borderRadius: 20 }} />
            </TouchableOpacity>
          )
        } else {
          return (
            <TouchableOpacity onPress={() => handleOpen(index)} activeOpacity={1}>
              <Video
                resizeMode={ResizeMode.COVER}
                source={{ uri: item.filePath }}
                style={{ width: '100%', height: 263, borderRadius: 20 }}
                shouldPlay={false}
              />
            </TouchableOpacity>
          )
        }
      }}
      sliderWidth={320}
      itemWidth={165}
      horizontal
      autoplay={false}
      activeSlideAlignment={'start'}
    />
  )
}
