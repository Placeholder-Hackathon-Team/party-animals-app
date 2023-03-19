import React, { useState } from 'react'
import { View, Image, Button, StyleSheet, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { SERVER_URL } from '../../utils/env'

const CameraUploadComponent = (): JSX.Element => {
  const [image, setImage] = useState<ImagePicker.ImagePickerResult | null>(null)

  const pickImageFromCamera = async (): Promise<void> => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync()
    if (status !== 'granted') {
      Alert.alert('Permission denied', 'Sorry, we need camera roll permissions to make this work!')
      return
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    })

    if (!result.canceled) {
      setImage(result)
      uploadImage(result)
    }
  }

  const uploadImage = async (image: ImagePicker.ImagePickerResult): Promise<void> => {
    if (image.canceled) {
      return
    }

    const { assets } = image

    if (!assets || assets.length < 1) {
      console.log('No assets selected')
      return
    }

    const data = new FormData()
    data.append('file', {
      uri: assets?.[0].uri,
      type: assets?.[0].type || 'image',
      name: assets?.[0].uri.split('/').pop() || 'photo.jpg',
    })
    data.append('user', 'id')
    data.append('event', 'id')
    data.append('place', 'id')

    try {
      const response = await fetch(`${SERVER_URL}/stories/create`, {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      })

      const responseJson = await response.json()
      console.log('Upload successful:', responseJson)
    } catch (error) {
      console.error('Upload error:', error)
    }
  }

  return (
    <View style={styles.container}>
      {image && <Image source={{ uri: image?.assets?.[0].uri }} style={styles.image} />}
      <Button title="Take a photo or video" onPress={pickImageFromCamera} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
})

export default CameraUploadComponent
