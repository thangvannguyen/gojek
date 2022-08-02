
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Image, Text, TouchableOpacity, StatusBar } from 'react-native';
import { iconClose, iconDown, iconHeart } from '../constants/icons';

export default function HeaderLocation() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.boxLocation}>
                < TouchableOpacity onPress={() => navigation.push('Home')}>
                    <Image style={styles.iconClose} source={iconClose} />
                </TouchableOpacity>
                <Text style={styles.textLocation}>
                    82/12 Nguyễn Xí
                </Text>
                <Image style={styles.iconDown} source={iconDown} />
            </View>
            <View style={styles.boxCollection}>
                <TouchableOpacity>
                    <Image style={styles.iconHeart} source={iconHeart} />
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        width: '100%',
        paddingTop: StatusBar.currentHeight + 10,
    },
    boxLocation: {
        display: 'flex',
        flexDirection: 'row',
        width: '85%',
        borderRadius: 50,
        overflow: 'hidden',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    boxCollection: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textLocation: {
        paddingLeft: 10,
        fontWeight: '500',
        fontSize: 16
    },
    iconClose: {
        width: 25,
        height: 25,
    },
    iconDown: {
        width: 25,
        height: 25,
    },
    iconHeart: {
        width: 25,
        height: 25,
    }
});