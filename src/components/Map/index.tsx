import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import * as Location from 'expo-location'

export default function Map() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null)
  console.log(location)
  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        return
      }

      let currentLocation = await Location.getCurrentPositionAsync({})
      setLocation(currentLocation)
    })()
  }, [])

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: location?.coords?.latitude || 42.67444429848731,
        longitude: location?.coords?.longitude || 23.330522262810607,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Marker
        coordinate={{
          latitude: location?.coords?.latitude || 0,
          longitude: location?.coords?.longitude || 0,
        }}
        title="You are here"
        description="This is your current location"
      />
    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
})
