
import React from 'react';
import { StyleSheet, View, Image, Text, Dimensions, TouchableOpacity } from 'react-native';


export default function CardFood({ title = '', imageUrl = 'https://img.freepik.com/free-photo/delicious-vietnamese-food-including-pho-ga-noodles-spring-rolls-white-table_181624-34062.jpg' }) {
    return (
        <View style={styles.container}>
            <View style={styles.boxCardTop}>
                <View style={styles.boxImage} >
                    <Image style={styles.imageUrl} source={{ uri: imageUrl || '' }} />
                </View>
                <View style={styles.boxEvent}>
                    <View style={styles.boxEventText1}><Text style={styles.boxEventText3} numberOfLines={1}>Giảm 70K</Text></View>
                </View>
            </View>
            <View style={styles.boxCardBottom}>
                <Text style={styles.boxCardMiddleInfo} numberOfLines={1}>{title || ''}</Text>
                <View style={styles.boxCardPrice}>
                    <Text style={styles.textPriceAfterDiscount} numberOfLines={1}>15.000</Text>
                    <Text style={styles.textPrice} numberOfLines={1}>15.000</Text>
                </View>
                <TouchableOpacity>
                <Text style={styles.btnShowAdd}>Thêm</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const ScreenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        justifyContent: 'space-between',
        alignItems: 'center',
        minWidth: 150,
        width: (ScreenWidth / 2) - 20,
        maxWidth: 190,
        height: 270,
        borderRadius: 18,
        marginHorizontal: 10,
        marginBottom: 40,
    },
    boxCardTop: {
        width: '100%',
        height: (ScreenWidth / 2) - 20,
        maxHeight: 190,
        borderRadius: 18,
        shadowOffset: { width: -2, height: 4 },
        shadowColor: '#171717',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        position: 'relative'
    },
    boxImage: {
        width: '100%',
        height: '100%',
        borderRadius: 18,
        overflow: 'hidden',
    },
    imageUrl: {
        width: '100%',
        height: '100%',
    },
    boxEvent: {
        width: '50%',
        position: 'absolute',
        left: 5,
        top: 5,
    },
    boxEventText1: {
        zIndex: 2,
        backgroundColor: '#E52435',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    boxEventText3: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: '500',
        padding: 5,
    },
    boxCardBottom: {
        width: '100%',
        height: 'auto',
        padding: 10,
    },
    boxCardMiddleInfo: {
        fontSize: 16,
        fontWeight: '800',
        paddingTop: 5,
        paddingBottom: 5,
    },
    boxCardPrice: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    textPriceAfterDiscount:{
        fontSize: 16,
        fontWeight: '700',
        paddingRight: 10,
    },
    textPrice: {
        fontSize: 16,
        fontWeight: '700',
        color: '#727272',
        textDecorationLine: 'line-through',
        textDecorationColor: '#727272',
    },
    btnShowAdd:{
        width: '100%',
        color: '#01870C',
        borderColor: '#01870C',
        borderWidth: 2,
        borderRadius: 20,
        paddingTop: 5,
        paddingBottom: 5,
        marginTop: 5,
        fontWeight: '800',
        fontSize: 14,
        textAlign: 'center',
    }
});