
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default function ItemVoucher({ banner = '', text = '' }) {
    return (
        <View style={styles.container}>
            <View style={styles.boxBanner}>
                {!!banner && (<Image style={styles.banner} source={banner} />)}
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        shadowOffset: { width: -2, height: 4 },
        shadowColor: '#171717',
        shadowOpacity: 0.9,
        shadowRadius: 5,
        elevation: 20,
    },
    boxBanner: {
        width: '100%',
        maxWidth: 400,
        minHeight: 100,
        maxHeight: 200,
        borderWidth: 0,
        borderRadius: 20,
        overflow: 'hidden',
    },
    banner: {
        width: '100%',
        height: '100%',
    },
});