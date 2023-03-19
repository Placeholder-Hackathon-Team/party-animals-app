import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import BackArrow from '../../components/BackArrow'
import UserPlaces from '../../components/UserPlaces'
import UserStories from '../../components/UserStories'
import { COLORS } from '../../constants/colors'

function ProfileImage() {
  return (
    <Image
      style={styles.profilePic}
      source={{ uri: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg' }}
    />
  )
}

function FollowButton() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.btnText}>Follow</Text>
    </TouchableOpacity>
  )
}

function OptionButton() {
  return (
    <TouchableOpacity style={{ ...styles.button, width: 'auto', padding: 10 }}>
      <Ionicons name="ios-settings-sharp" size={14} color={COLORS.light} />
    </TouchableOpacity>
  )
}

export default function Profile() {
  const [selectedTab, setSelectedTab] = useState('Places')

  const placesNavStyles = selectedTab === 'Places' ? { ...styles.navOption, ...styles.selectedNav } : styles.navOption
  const storiesNavStyles = selectedTab === 'Stories' ? { ...styles.navOption, ...styles.selectedNav } : styles.navOption

  return (
    <View style={{ backgroundColor: COLORS.dark, height: '100%', width: '100%', justifyContent: 'flex-end' }}>
      <BackArrow />
      <View style={styles.container}>
        <View style={{ paddingHorizontal: 56, width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
          <ProfileImage />
          <View style={{ marginTop: 20 }}>
            <Text style={styles.profileName}>{'Spaghetti Monster'}</Text>
            <Text style={styles.profileNick}>{'@username'}</Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 16,
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            paddingHorizontal: 58,
          }}
        >
          <View style={styles.statBox}>
            <Text style={styles.statVal}>{'153'}</Text>
            <Text style={styles.statTitle}>{'Following'}</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statVal}>{'Nightlife Nomad'}</Text>
            <Text style={styles.statTitle}>{'Rank'}</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statVal}>{'462'}</Text>
            <Text style={styles.statTitle}>{'Followers'}</Text>
          </View>
        </View>

        <View>
          <Text style={styles.descr}>{'Description'}</Text>
        </View>

        <View style={{ marginTop: 16, flexDirection: 'row', gap: 10 }}>
          <FollowButton />
          <OptionButton />
        </View>

        <View style={styles.contentNav}>
          <TouchableOpacity style={placesNavStyles} onPress={() => setSelectedTab('Places')}>
            <Text>Places</Text>
          </TouchableOpacity>

          <TouchableOpacity style={storiesNavStyles} onPress={() => setSelectedTab('Stories')}>
            <Text>Stories</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderBottomColor: COLORS.dark,
            borderBottomWidth: 1,
            width: '51%',
            zIndex: -1,
            marginTop: -2,
          }}
        />

        <View style={{ marginTop: 16 }}>{selectedTab === 'Places' ? <UserPlaces /> : <UserStories />}</View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: COLORS.light,
    height: '85%',
    bottom: 0,
    borderRadius: 79,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    alignItems: 'center',
  },
  profilePic: {
    width: 104,
    height: 104,
    borderRadius: 104 / 2,
    borderColor: COLORS.light,
    borderWidth: 8,
    marginTop: -32,
  },
  profileName: {
    fontWeight: '600',
    fontSize: 17,
    lineHeight: 22,
    color: COLORS.dark,
  },
  profileNick: {
    fontSize: 13,
    lineHeight: 22,
    color: COLORS.dark,
  },
  statBox: {
    alignItems: 'center',
  },
  statVal: {
    fontWeight: '600',
    fontSize: 17,
    lineHeight: 22,
    color: COLORS.dark,
  },
  statTitle: {
    fontWeight: '300',
    fontSize: 14,
    lineHeight: 22,
    color: COLORS.dark,
  },
  descr: {
    marginTop: 16,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22,
    color: COLORS.dark,
  },
  button: {
    backgroundColor: COLORS.dark,
    borderRadius: 14,
    paddingVertical: 10,
    alignItems: 'center',
    width: 148,
  },
  btnText: {
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 16,
    color: COLORS.light,
  },
  contentNav: {
    position: 'relative',
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 32,
    zIndex: 1,
  },
  navOption: {
    width: 85,
    paddingVertical: 5,

    alignItems: 'center',
    justifyContent: 'center',
  },
  navText: {
    fontWeight: '400',
    fontSize: 16,
  },
  selectedNav: {
    borderColor: COLORS.primary,
    borderBottomWidth: 3,
  },
})
