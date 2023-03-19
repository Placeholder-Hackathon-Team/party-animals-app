import { Ionicons } from '@expo/vector-icons'
import { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RootStackParamList } from '../../../App'
import BackArrow from '../../components/BackArrow'
import UserPlaces from '../../components/UserPlaces'
import UserStories from '../../components/UserStories'
import { COLORS } from '../../constants/colors'
import { RouteProp } from '@react-navigation/native'
import axios from 'axios'
import { SERVER_URL } from '../../utils/env'
import LoadingComponent from '../../Loading'
import { currentUserId } from '../Story'

function ProfileImage({ url }: { url: string }) {
  return <Image style={styles.profilePic} source={{ uri: url }} />
}

function FollowButton() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.btnText}>Follow</Text>
    </TouchableOpacity>
  )
}

function EditButton() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.btnText}>Edit Profile</Text>
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

// in the destination screen
interface ProfileProps {
  route: RouteProp<RootStackParamList, 'Profile'>
}

export default function Profile({ route }: ProfileProps) {
  const { userId } = route.params
  const [user, setUser] = useState<any | null>(null)
  const [selectedTab, setSelectedTab] = useState('Places')

  useEffect(() => {
    axios
      .get(SERVER_URL + '/users/' + userId)
      .then((res) => {
        const user = res.data
        setUser(user)
      })
      .catch(console.log)
  }, [userId])

  const placesNavStyles = selectedTab === 'Places' ? { ...styles.navOption, ...styles.selectedNav } : styles.navOption
  const storiesNavStyles = selectedTab === 'Stories' ? { ...styles.navOption, ...styles.selectedNav } : styles.navOption

  return (
    <View style={{ backgroundColor: COLORS.dark, height: '100%', width: '100%', justifyContent: 'flex-end' }}>
      <BackArrow />
      {user ? (
        <View style={styles.container}>
          <View
            style={{ paddingHorizontal: 56, width: '100%', flexDirection: 'row', gap: 30, justifyContent: 'center' }}
          >
            <ProfileImage url={user?.imageUrl} />
            <View style={{ marginTop: 20 }}>
              <Text style={styles.profileName}>{user?.name}</Text>
              <Text style={styles.profileNick}>@{user?.nickname}</Text>
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
              <Text style={styles.statVal}>{user?.following?.length}</Text>
              <Text style={styles.statTitle}>{'Following'}</Text>
            </View>

            <View style={styles.statBox}>
              <Text style={styles.statVal}>{user?.rank}</Text>
              <Text style={styles.statTitle}>{'Rank'}</Text>
            </View>

            <View style={styles.statBox}>
              <Text style={styles.statVal}>{user?.followers?.length}</Text>
              <Text style={styles.statTitle}>{'Followers'}</Text>
            </View>
          </View>

          <View>
            <Text style={styles.descr}>{user?.bio}</Text>
          </View>
          {userId !== currentUserId ? (
            <View style={{ marginTop: 16, flexDirection: 'row', gap: 10 }}>
              <FollowButton />
              <OptionButton />
            </View>
          ) : (
            <View style={{ marginTop: 16, flexDirection: 'row', gap: 10 }}>
              <EditButton />
              <OptionButton />
            </View>
          )}

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

          <View style={{ marginTop: 16 }}>
            {selectedTab === 'Places' ? <UserPlaces places={user?.places} /> : <UserStories stories={user?.stories} />}
          </View>
        </View>
      ) : (
        <View style={styles.container}>
          <LoadingComponent />
        </View>
      )}
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
    paddingHorizontal: 32,
    textAlign: 'center',
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
