import { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import ExpandableCard from '../../components/ExpandableCard'
import Map from '../../components/Map'
import MapNavigation from '../../components/MapNavigation'

export default function Home() {
  const [selectedTab, setSelectedTab] = useState('Events')

  return (
    <View style={styles.container}>
      <Map />
      <MapNavigation selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <ExpandableCard />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
})
