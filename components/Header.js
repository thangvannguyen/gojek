
import React from 'react';
import { StyleSheet, View, Image , TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { iconSearch, iconUser } from '../constants/icons';

export default  function Header(){
  return (
    <View style={styles.container}>
        <View style={styles.boxSearch}>
            <View style={styles.boxIconSearch} >
            <Image style={styles.iconSearch} source={iconSearch} />
            </View>
            <TextInput style={styles.inputSearch} placeholder="Tìm dịch vụ, món ăn, địa chỉ..." />
        </View>
        <View style={styles.boxUser}>
        <TouchableOpacity>
            <Image style={styles.iconUser} source={iconUser}/>
        </TouchableOpacity>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flexDirection:'row',
      backgroundColor:'#00880C',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      width: '100%',
      paddingTop: StatusBar.currentHeight + 10,
    },
    boxSearch:{
        display: 'flex',
        flexDirection:'row',
        width: '85%',
        position: 'relative',
        borderRadius: 50,
        overflow: 'hidden',
    },
    inputSearch:{
      height: 40,
      padding: 10,
      paddingLeft: 50,
      borderRadius: 50,
      width: '100%',
      backgroundColor:'#FAFAFA',
    },
    boxIconSearch: {
        zIndex: 2,
        position: 'absolute',
        top: 5,
        left: 5,
    },
    iconSearch: {
        width: 32, 
        height: 32,
    },
    boxUser:{
        height: 40,
        width: 40,
        borderRadius: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor:'#FAFAFA',
    },
    iconUser:{
        width: 32,
        height: 32,
    }
});