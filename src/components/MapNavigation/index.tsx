import { GestureResponderEvent, StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import { COLORS } from '../../constants/colors'

function NavOption({
  selectedTab,
  title,
  onPress,
}: {
  selectedTab: string
  title: string
  onPress?: (event: GestureResponderEvent) => void
}) {
  const btnStyle = { ...styles.button, ...(selectedTab === title ? styles.selectedBtn : {}) }
  const btnTextStyle = { ...styles.btnText, ...(selectedTab === title ? styles.selectedBtnText : {}) }

  return (
    <TouchableOpacity style={btnStyle} onPress={onPress}>
      <Text style={btnTextStyle}>{title}</Text>
    </TouchableOpacity>
  )
}

export default function MapNavigation({
  selectedTab,
  setSelectedTab,
}: {
  selectedTab: string
  setSelectedTab: (val: string) => void
}) {
  const handleSelectTab = (tab: string) => {
    setSelectedTab(tab)
  }

  return (
    <View style={styles.container}>
      <NavOption selectedTab={selectedTab} title={'Events'} onPress={() => handleSelectTab('Events')} />
      <NavOption selectedTab={selectedTab} title={'Places'} onPress={() => handleSelectTab('Places')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '10%',
    alignSelf: 'center',
    display: 'flex',
    width: '81%',
    backgroundColor: COLORS.dark,
    borderRadius: 20,
    fontSize: 16,
    flexDirection: 'row',
  },
  button: {
    width: '50%',
    borderRadius: 20,
    alignItems: 'center',
    padding: 12,
  },
  btnText: {
    color: COLORS.white,
    fontWeight: '600',
  },
  selectedBtn: {
    backgroundColor: COLORS.primary,
  },
  selectedBtnText: {
    color: COLORS.dark,
  },
})
