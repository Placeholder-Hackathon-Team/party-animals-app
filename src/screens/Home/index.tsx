import { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import ExpandableCard from '../../components/ExpandableCard'
import Map from '../../components/Map'
import MapNavigation from '../../components/MapNavigation'
import { SERVER_URL } from '../../utils/env'
import axios from 'axios'
import SearchBar from '../../components/SearchBar'

export default function Home() {
  const [selectedTab, setSelectedTab] = useState('Events')
  const [events, setEvents] = useState([])
  const [places, setPlaces] = useState([])
  const [selectedObj, setSelectedObj] = useState<null | keyof typeof events | keyof typeof places>(null)

  useEffect(() => {
    axios
      .get(SERVER_URL + '/events')
      .then((res) => {
        const { events } = res.data
        setEvents(events)
      })
      .catch(console.log)

    axios
      .get(SERVER_URL + '/places')
      .then((res) => {
        const { places } = res.data
        setPlaces(places)
      })
      .catch(console.log)
  }, [])

  return (
    <View style={styles.container}>
      <Map selectedTab={selectedTab} events={events} places={places} setSelectedObj={setSelectedObj} />
      <SearchBar />
      <MapNavigation selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {selectedObj && <ExpandableCard selectedObj={selectedObj} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
})
