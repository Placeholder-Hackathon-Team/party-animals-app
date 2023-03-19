import { Entypo } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import { TouchableOpacity, Alert } from 'react-native'
import { COLORS } from '../../constants/colors'

export default function CameraButton() {
  const pickImageFromCamera = async (): Promise<void> => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync()
    if (status !== 'granted') {
      Alert.alert('Permission denied', 'Sorry, we need camera roll permissions to make this work!')
      return
    }

    await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    })
  }
  return (
    <TouchableOpacity
      onPress={pickImageFromCamera}
      style={{
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: COLORS.dark,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Entypo name="camera" size={18} color={COLORS.light} />
    </TouchableOpacity>
  )
}
