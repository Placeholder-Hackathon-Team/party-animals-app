import { StyleSheet, View } from 'react-native'
import MapView from 'react-native-maps'
import Home from './src/screens/Home'

export default function App() {
  return (
    // <View style={styles.container}>
    <Home />
    // {/* <MapView style={styles.map} /> */}
    // </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
})
