
import React from 'react';
import { StyleSheet, View, Image, Text, Dimensions } from 'react-native';
import { iconStar } from '../constants/icons';


export default function CardCateFood({ title = '', imageUrl = 'https://img.freepik.com/free-photo/delicious-vietnamese-food-including-pho-ga-noodles-spring-rolls-white-table_181624-34062.jpg' }) {
    return (
        <View style={styles.container}>
            <View style={styles.boxCardTop}>
                <View style={styles.boxImage} >
                    <Image style={styles.imageUrl} source={{ uri: imageUrl || '' }} />
                </View>
                <View style={styles.boxEvent}>
                    <View style={styles.boxEventText1}><Text style={styles.boxEventText3} numberOfLines={1}>Giảm 70K</Text></View>
                    <View style={styles.boxEventText2}></View>
                </View>
            </View>
            <View style={styles.boxCardBottom}>
                <Text style={styles.boxCardMiddleTime} numberOfLines={1}>0.33km . 23 phút</Text>
                <Text style={styles.boxCardMiddleInfo} numberOfLines={2}>{title || ''}</Text>
                <View style={styles.boxCardReview}>
                    <Image style={styles.iconStar} source={iconStar} />
                    <Text style={styles.boxCardTextReview} numberOfLines={1}> 4.8 . 10+ đánh giá</Text>
                </View>
            </View>
        </View>
    );
}
const ScreenHeight = Dimensions.get("window").width;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        justifyContent: 'space-between',
        alignItems: 'center',
        minWidth: 160,
        width: (ScreenHeight / 2) - 20,
        maxWidth: 180,
        height: 230,
        borderRadius: 18,
        marginRight: 20,
        shadowOffset: { width: -2, height: 4 },
        shadowColor: '#171717',
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 3,
    },
    boxCardTop: {
        width: '100%',
        height: '55%',
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
        left: -5,
        top: 5,
    },
    boxEventText1: {
        zIndex: 2,
        backgroundColor: '#E52435',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 0,
    },
    boxEventText2: {
        zIndex: -1,
        backgroundColor: '#AD242E',
        height: 15,
        width: 15,
        position: 'absolute',
        left: 0,
        top: 22,
        transform: [{ rotateY: "45deg" }, { rotateZ: "50deg" }]
    },
    boxEventText3: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: '500',
        padding: 5,
    },
    boxCardBottom: {
        width: '100%',
        height: '45%',
        padding: 10,
    },
    boxCardMiddleTime: {
        fontSize: 10,
    },
    boxCardMiddleInfo: {
        fontSize: 16,
        fontWeight: '700',
        paddingTop: 5,
        paddingBottom: 5,
    },
    boxCardReview: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    boxCardTextReview: {
        fontSize: 10,
        fontWeight: '500'
    },
    iconStar: {
        width: 18,
        height: 18,
    }
});