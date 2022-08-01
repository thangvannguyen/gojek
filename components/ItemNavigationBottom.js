
import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default function ItemNavigationBottom({ icon = '', iconActive = '', text = '', active = false }) {
    return (
        <View style={styles.container}>
            <Image style={styles.icon} source={!!active ? iconActive : icon} />
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
        width: 25,
        height: 25,
    },
    text: {
        fontSize: 13,
    },
});