import React from 'react'
import { StyleSheet, View, Image, FlatList, TouchableOpacity } from 'react-native'

const ITEM_WIDTH = 110 // Change this to adjust the size of the images
const ITEM_MARGIN = 10 // Change this to adjust the margin between images

const renderItem = ({ item }: { item: any }) => {
  return (
    <TouchableOpacity>
      <Image source={{ uri: item.filePath }} style={styles.itemImage} />
    </TouchableOpacity>
  )
}

const UserStories = ({ stories }: { stories: any[] }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={stories}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
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
