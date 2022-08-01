
import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { iconHome, iconPromotion, iconOrder, iconMailbox, iconHomeActive, iconPromotionActive, iconOrderActive, iconMailboxActive } from '../constants/icons';
import ItemNavigationBottom from './ItemNavigationBottom';

export default function NavigationBottom() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.push('Home')} >
                <ItemNavigationBottom text="Trang chủ" icon={iconHome} iconActive={iconHomeActive} active={true} />
            </TouchableOpacity>
            <TouchableOpacity>
                <ItemNavigationBottom text="Ưu đãi" icon={iconPromotion} iconActive={iconPromotionActive} />
            </TouchableOpacity>
            <TouchableOpacity>
                <ItemNavigationBottom text="Đơn hàng" icon={iconOrder} iconActive={iconOrderActive} />
            </TouchableOpacity>
            <TouchableOpacity>
                <ItemNavigationBottom text="Hộp thư" icon={iconMailbox} iconActive={iconMailboxActive} />
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        width: '100%',
        backgroundColor: '#FFF',
        shadowOffset: { width: -2, height: 4 },
        shadowColor: '#171717',
        shadowOpacity: 0.9,
        shadowRadius: 5,
        elevation: 10,
    },
});