
import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { iconCarShip } from '../constants/icons';

export default function TimeShip({  text = '' }) {
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.iconCarShip} source={iconCarShip} />
            </View>
            <View style={styles.boxTitle}>
                <Text style={styles.title}>Giao hàng</Text>
                <Text style={styles.text}>{text}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        shadowOffset: { width: -2, height: 4 },
        shadowColor: '#171717',
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 2,
        borderRadius: 20,
        borderWidth: 0,
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#FFF',
        margin: 10,
        borderColor: '#E8E8E8'
    },
    boxTitle: {
        display:'flex',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    iconCarShip: {
        width: 50,
        height: 50,
        borderRadius: 60,
        marginRight: 5
    },
    title:{
        fontWeight: '700',
        fontSize: 16,
    },
    text:{
        fontSize: 12,
    }
});