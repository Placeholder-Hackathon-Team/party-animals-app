import React, { useState } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

const FavoriteIcon = () => {
  const [isFavorite, setIsFavorite] = useState(false)

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <TouchableOpacity onPress={handleFavoriteToggle}>
      <View>
        {isFavorite ? (
          <FontAwesome name="star" size={24} color="white" />
        ) : (
          <FontAwesome name="star-o" size={24} color="white" />
        )}
      </View>
    </TouchableOpacity>
  )
}

export default FavoriteIcon
