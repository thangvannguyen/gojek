
import React from 'react';
import { StyleSheet, View, Image , TextInput} from 'react-native';
import { iconSearchMini } from '../constants/icons';

export default  function InputSearch(){
  return (
    <View style={styles.container}>
         <View style={styles.boxSearch}>
            <View style={styles.boxIconSearch} >
            <Image style={styles.iconSearch} source={iconSearchMini} />
            </View>
            <TextInput style={styles.inputSearch} placeholder="Bạn muốn ăn gì nào?" />
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flexDirection:'row',
      backgroundColor:'#FFF',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      width: '100%',
    },
    boxSearch:{
        display: 'flex',
        flexDirection:'row',
        width: '100%',
        position: 'relative',
        borderRadius: 50,
        overflow: 'hidden',
    },
    inputSearch:{
      height: 40,
      padding: 10,
      paddingLeft: 40,
      borderRadius: 50,
      width: '100%',
      backgroundColor:'#FAFAFA',
    },
    boxIconSearch: {
        zIndex: 2,
        position: 'absolute',
        top: 8,
        left: 10,
    },
    iconSearch: {
        width: 25,
        height: 25,
    },
});