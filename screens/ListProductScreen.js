
import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar , Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HeaderProductBack from '../components/HeaderProductBack';
import NavigationBellBottom from '../components/NavigationBellBottom';
import MenuCardsRow from '../components/MenuCardsRow';
import TimeShip from '../components/TimeShip';
 
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

const ListProductScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <HeaderProductBack />
      </View>
      <ScrollView>
        <View style={styles.container}>
            <TimeShip text="Giao hàng trong 20 phút" />
            <MenuCardsRow  titleRow='A Đệ Quán' />
            <MenuCardsRow titleRow='Không Say Không về' />
            <MenuCardsRow titleRow='Bạn tôi' />
            <MenuCardsRow titleRow='La Cà Quán' />
        </View>
      </ScrollView>
      <View style={styles.bottom}>
        <NavigationBellBottom />
      </View>
    </SafeAreaView>
  );
}
export default ListProductScreen;

