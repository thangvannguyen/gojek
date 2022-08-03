
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { iconBell } from '../constants/icons';

export default function NavigationBellBottom() {
    const navigation = useNavigation();
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.boxMenu}>
                    <Image icon={iconBell} style={styles.iconBell} source={iconBell} />
                    <Text style={styles.textMenu}>Menu</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        margin: 'auto',
        textAlign: 'center',
        paddingBottom: 10,
    },
    boxMenu: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ED2736',
        shadowOffset: { width: -2, height: 4 },
        shadowColor: '#171717',
        shadowOpacity: 0.9,
        shadowRadius: 5,
        elevation: 10,
        borderRadius: 25,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 15,
    },
    iconBell: {
        width: 20,
        height: 20,
    },
    textMenu: {
        fontSize: 14,
        fontWeight: '600',
        color: '#FFF',
        paddingLeft: 5,
    }
});