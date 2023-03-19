import { Entypo, Ionicons } from '@expo/vector-icons'
import { View, Text, StyleSheet } from 'react-native'
import { COLORS } from '../../constants/colors'
import CameraButton from '../CameraButton'

export default function SearchBar() {
  return (
    <View style={styles.wrapper}>
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
      <CameraButton />
    </View>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    left: '9%',
    top: '7%',
    width: '81%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    alignSelf: 'center',
    borderRadius: 25,
    fontSize: 16,
    flexDirection: 'row',
    backgroundColor: COLORS.dark,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: '85%',
  },
})
