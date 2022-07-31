
import React from 'react';
import { StyleSheet, View, } from 'react-native';
import { banner1, banner2, banner3, banner4, banner5 } from '../constants/banners';
import ItemBanner from './ItemBanner';

export default function MenuBanner() {
    return (
        <View style={styles.container}>
            <ItemBanner banner={banner1} />
            {/* <ItemBanner banner={banner2} /> */}
            <ItemBanner banner={banner3} />
            <ItemBanner banner={banner4} />
            <ItemBanner banner={banner5} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});