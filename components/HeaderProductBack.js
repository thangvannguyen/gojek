
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Image, TouchableOpacity, StatusBar } from 'react-native';
import { iconPrevious } from '../constants/icons';

export default function HeaderProductBack() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.boxBack}>
                < TouchableOpacity onPress={() => navigation.push('GoFood')}>
                    <Image style={styles.iconPrevious} source={iconPrevious} />
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
    boxBack: {
        display: 'flex',
        flexDirection: 'row',
        width: '85%',
        borderRadius: 50,
        overflow: 'hidden',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    iconPrevious: {
        width: 25,
        height: 25,
    },
});