import React from 'react'
import { StyleSheet, View, Image, FlatList } from 'react-native'

const DATA = [
  {
    id: '1',
    image:
      'https://media.npr.org/assets/img/2022/11/04/gettyimages-1183414292-1-_slide-edff8c3fe6afcab5c6457e3c7bd011f5c1745161-s1100-c50.jpg',
  },
  {
    id: '2',
    image:
      'https://media.npr.org/assets/img/2022/11/04/gettyimages-1183414292-1-_slide-edff8c3fe6afcab5c6457e3c7bd011f5c1745161-s1100-c50.jpg',
  },
  {
    id: '3',
    image:
      'https://media.npr.org/assets/img/2022/11/04/gettyimages-1183414292-1-_slide-edff8c3fe6afcab5c6457e3c7bd011f5c1745161-s1100-c50.jpg',
  },
  {
    id: '4',
    image:
      'https://media.npr.org/assets/img/2022/11/04/gettyimages-1183414292-1-_slide-edff8c3fe6afcab5c6457e3c7bd011f5c1745161-s1100-c50.jpg',
  },
]

const ITEM_WIDTH = 110 // Change this to adjust the size of the images
const ITEM_MARGIN = 10 // Change this to adjust the margin between images

const renderItem = ({ item }: { item: any }) => {
  return <Image source={{ uri: item.image }} style={styles.itemImage} />
}

const UserStories = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  columnWrapper: {
    gap: 10,
    justifyContent: 'space-between',
    marginBottom: ITEM_MARGIN,
  },
  itemImage: {
    width: ITEM_WIDTH,
    height: ITEM_WIDTH,
    borderRadius: 16,
  },
})

export default UserStories
