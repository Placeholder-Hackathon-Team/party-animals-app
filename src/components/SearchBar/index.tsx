import { Entypo, Ionicons } from '@expo/vector-icons'
import { View, Text, StyleSheet } from 'react-native'
import { COLORS } from '../../constants/colors'

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <Entypo name="magnifying-glass" size={16} color={COLORS.light} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexGrow: 1 }}>
        <View style={{ marginLeft: 12 }}>
          <Text
            style={{
              color: COLORS.light,
              fontWeight: '400',
              fontSize: 14,
            }}
          >
            Where to?
          </Text>
          <Text
            style={{
              color: COLORS.light,
              fontWeight: '400',
              fontSize: 10,
              opacity: 0.3,
            }}
          >
            Anywhere | Anytime
          </Text>
        </View>
        <Ionicons name="options-outline" size={24} color={COLORS.light} />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '7%',
    alignSelf: 'center',
    display: 'flex',
    width: '81%',
    borderRadius: 25,
    fontSize: 16,
    flexDirection: 'row',
    backgroundColor: COLORS.dark,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
})
