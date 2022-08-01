
import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar , Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HeaderLocation from '../components/HeaderLocation';
import NavigationBottom from '../components/NavigationBottom';
 
let ScreenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    paddingTop: StatusBar.currentHeight + 70,
    paddingBottom: 50,
    minHeight: ScreenHeight + 100, // 100 is to overflow
  },
  header: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    zIndex: 9
  },
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9
  },
});

const GoFoodScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <HeaderLocation />
      </View>
      <ScrollView>
        <View style={styles.container}>
            <Text>GO FOOD</Text>
        </View>
      </ScrollView>
      <View style={styles.bottom}>
        <NavigationBottom />
      </View>
    </SafeAreaView>
  );
}
export default GoFoodScreen;

