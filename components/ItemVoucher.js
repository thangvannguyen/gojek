
import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

export default function ItemVoucher({ icon = '', text = ''}) {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Text style={styles.text}>{text || ''}</Text>
                {!!icon && (<Image style={styles.icon} source={icon} />)}
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        paddingTop: 15,
        paddingBottom: 15,
        borderColor: '#E8E8E8',
        borderWidth: 1,
        borderRadius: 16,
        marginRight: 10, 
    },
    icon: {
        width: 25,
        height: 25,
    },
    text: {
        fontSize: 16,
        marginRight: 5,
        fontWeight: '500',
        lineHeight: 25,
    },
});