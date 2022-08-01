import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  HomeScreen from './screens/HomeScreen';
import GoFoodScreen from './screens/GoFoodScreen'
const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="GoFood" component={GoFoodScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
