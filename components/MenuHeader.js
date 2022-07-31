
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { iconGoSend , iconGoCar, iconGoRide, iconGoFood  } from '../constants/icons';
import ItemMenu from './ItemMenu';

export default  function MenuHeader(){
  return (
    <View style={styles.container}>
        <ItemMenu text="Go Ride" icon={iconGoRide}/>
        <ItemMenu text="Go Car" icon={iconGoCar}/>
        <ItemMenu text="Go Food" icon={iconGoFood}/>
        <ItemMenu text="Go Send" icon={iconGoSend}/>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flexDirection:'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: 10,
      width: '100%',
    },
});