import Home from './src/screens/Home'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Story from './src/screens/Story'

export type Item = {
  type: string
  source: {
    uri: string
  }
}

// in the root stack navigator
export type RootStackParamList = {
  Home: undefined
  Story: { items: Item[]; index: number }
}
const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Story" component={Story} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
