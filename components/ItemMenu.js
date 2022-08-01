
import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default function ItemMenu({ icon = '', text = '' }) {
    return (
        <View style={styles.container}>
            <Image style={styles.icon} source={icon} />
            <Text style={styles.text}>{text || ''}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
    },
    icon: {
        width: 60,
        height: 60,
    },
    text: {
        fontSize: 14,
    },
});