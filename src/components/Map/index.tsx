import { Entypo, MaterialIcons } from '@expo/vector-icons'
import React, { useRef } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { COLORS } from '../../constants/colors'
import { getColorByIndex } from '../../utils'

const DEFAULT_LATITUDE = 42.67444429848731
const DEFAULT_LONGITUDE = 23.330522262810607

function CustomMarker() {
  return (
    <View style={{ gap: -8 }}>
      <View
        style={{
          marginBottom: 0,
          flexDirection: 'row',
          alignItems: 'center',
          padding: 8,
          paddingVertical: 4,
          backgroundColor: COLORS.primary,
          borderRadius: 16,
        }}
      >
        <MaterialIcons name="emoji-people" size={20} color={'white'} />
        <Text style={{ fontSize: 16, color: 'white', fontWeight: '600' }}>13</Text>
      </View>

      <View style={{ flexGrow: 1, marginTop: 0, padding: 0, alignItems: 'center' }}>
        <Entypo name="triangle-down" size={24} color={COLORS.primary} />
      </View>
    </View>
  )
}

function CustomLike() {
  return (
    <View style={{ gap: -8 }}>
      <View
        style={{
          marginBottom: 0,
          flexDirection: 'row',
          alignItems: 'center',
          padding: 8,
          paddingVertical: 4,
          backgroundColor: '#EBBA9FA6',
          borderRadius: 16,
        }}
      >
        <MaterialIcons name="thumb-up" size={16} color="white" />
        <Text style={{ fontSize: 16, color: 'white', fontWeight: '600', marginLeft: 4 }}>78</Text>
      </View>

      <View style={{ flexGrow: 1, marginTop: 0, padding: 0, alignItems: 'center' }}>
        <Entypo name="triangle-down" size={24} color={'#EBBA9FA6'} />
      </View>
    </View>
  )
}

export default function Map({
  selectedTab,
  events,
  places,
  setSelectedObj,
}: {
  setSelectedObj: (val: any) => void
  selectedTab: string
  events: any[]
  places: any[]
}) {
  const mapViewRef = useRef<MapView | null>(null)

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        showsMyLocationButton={true}
        style={styles.map}
        ref={mapViewRef}
        initialRegion={{
          longitude: DEFAULT_LONGITUDE,
          latitude: DEFAULT_LATITUDE,
          latitudeDelta: 0.0622,
          longitudeDelta: 0.0221,
        }}
        customMapStyle={customMapStyle}
        onPress={() => setSelectedObj(null)}
      >
        {selectedTab === 'Events'
          ? events.map((x, i) => (
              <Marker
                key={i}
                onPress={() => setSelectedObj(x)}
                coordinate={{ longitude: +x.location.longitude, latitude: +x.location.latitude }}
                stopPropagation={true}
              >
                <CustomMarker />
              </Marker>
            ))
          : places.map((x, i) => (
              <Marker
                key={i}
                onPress={() => setSelectedObj(x)}
                coordinate={{ longitude: +x.location.longitude, latitude: +x.location.latitude }}
                stopPropagation={true}
              >
                <CustomLike />
              </Marker>
            ))}
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',

    position: 'relative',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 64,
    right: 24,
  },
  gpsButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 50,
    padding: 8,
  },
})

const customMapStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#1d2c4d',
      },
    ],
  },
  {
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#8ec3b9',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#1a3646',
      },
    ],
  },
  {
    featureType: 'administrative.country',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#4b6878',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#64779e',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'administrative.neighborhood',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative.province',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#4b6878',
      },
    ],
  },
  {
    featureType: 'landscape.man_made',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#334e87',
      },
    ],
  },
  {
    featureType: 'landscape.natural',
    elementType: 'geometry',
    stylers: [
      {
        color: '#023e58',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: '#283d6a',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#6f9ba5',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#1d2c4d',
      },
    ],
  },
  {
    featureType: 'poi.business',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.government',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#023e58',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#3C7680',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#304a7d',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#98a5be',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#1d2c4d',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry.fill',
    stylers: [
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.text.fill',
    stylers: [
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#2c6675',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#255763',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#b0d5ce',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#023e58',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'simplified',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'simplified',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        visibility: 'simplified',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        visibility: 'simplified',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#98a5be',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#1d2c4d',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#283d6a',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'geometry',
    stylers: [
      {
        color: '#3a4762',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#0e1626',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#4e6d70',
      },
    ],
  },
]
