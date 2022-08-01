
import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { iconGoSend, iconGoCar, iconGoRide, iconGoFood } from '../constants/icons';
import ItemMenu from './ItemMenu';

export default function MenuHeader() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <ItemMenu text="Go Ride" icon={iconGoRide} />
            </TouchableOpacity>
            <TouchableOpacity>
                <ItemMenu text="Go Car" icon={iconGoCar} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.push('GoFood')}>
                <ItemMenu text="Go Food" icon={iconGoFood} />
            </TouchableOpacity>
            <TouchableOpacity>
                <ItemMenu text="Go Send" icon={iconGoSend} />
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
        width: '100%',
    },
});