import { FontAwesome } from '@expo/vector-icons'
import { useState } from 'react'
import { FlatList, Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { COLORS } from '../../constants/colors'

const FavoriteIcon = () => {
  const [isFavorite, setIsFavorite] = useState(false)

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <TouchableOpacity
      onPress={handleFavoriteToggle}
      style={{
        marginLeft: 14,
        marginTop: -42,
      }}
    >
      <View>
        {isFavorite ? (
          <FontAwesome name="star" size={16} color={COLORS.primary} />
        ) : (
          <FontAwesome name="star-o" size={16} color={COLORS.primary} />
        )}
      </View>
    </TouchableOpacity>
  )
}

function PlaceCard() {
  return (
    <View style={styles.place}>
      <Image
        style={{
          width: 75,
          height: 75,
          borderRadius: 14,
        }}
        source={{
          uri: 'https://st.depositphotos.com/1053646/1770/i/950/depositphotos_17700789-stock-photo-dance-club.jpg',
        }}
      />

      <View
        style={{
          position: 'relative',
          marginLeft: 10,
          marginTop: 10,
          borderBottomWidth: 1,
          borderColor: COLORS.primary,
          flexDirection: 'row',

          justifyContent: 'space-between',
          alignItems: 'center',
          height: 44,
        }}
      >
        <View style={{ width: 200 }}>
          <Text style={styles.placeName}>Bar Friday</Text>
          <Text style={styles.placeLoc}>ул. "Ген. Гурко" 21, София</Text>
        </View>

        <FavoriteIcon />
      </View>
    </View>
  )
}

export default function UserPlaces() {
  return (
    <FlatList
      data={[{ id: '1' }, { id: '2' }]}
      renderItem={({ item }) => <PlaceCard />}
      keyExtractor={(item) => item.id}
    />
  )
}

const styles = StyleSheet.create({
  place: {
    flexDirection: 'row',
    backgroundColor: COLORS.dark,
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginBottom: 12,
  },
  placeName: {
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 22,
    color: COLORS.light,
  },
  placeLoc: {
    fontWeight: '400',
    fontSize: 12,
    color: COLORS.secondaryGray,
  },
})
