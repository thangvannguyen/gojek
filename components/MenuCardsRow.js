
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import CardCateFood from './CardCateFood';

const styles = StyleSheet.create({
  container: {
    padding: 0,
    minWidth: 300,
    marginBottom: 20,
  },
  boxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
  },
  titleRow: {
    fontSize: 20,
    fontWeight: '800',
    paddingBottom: 10,
    textTransform: 'uppercase',
    alignItems: 'center',
  },
  btnShowAll: {
    width: 100,
    color: '#01870C',
    backgroundColor: '#E9FFEA',
    borderRadius: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    fontWeight: '800',
    fontSize: 14,
    textAlign: 'center'
  }
});

const MenuCardsRow = ({ titleRow = '' }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.boxRow}>
        <Text style={styles.titleRow} numberOfLines={2} >{titleRow || ''}</Text>
        <TouchableOpacity onPress={() => navigation.push('ListProduct')}>
          <Text style={styles.btnShowAll}>Xem tất cả</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={{
          padding: 10,
        }}
        horizontal
        showsHorizontalScrollIndicator={false} >
        <CardCateFood title="Quán Ngon Tuyệt vời" imageUrl='https://w0.peakpx.com/wallpaper/120/677/HD-wallpaper-food-meat-vegetable.jpg' />
        <CardCateFood title="Quán Ngon OKE con dê tươi như em 18+" imageUrl='https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&w=1000&q=80' />
        <CardCateFood title="Quán Quá xá trời là ơi" imageUrl='https://images.immediate.co.uk/production/volatile/sites/30/2020/08/processed-food700-350-e6d0f0f.jpg?quality=90&resize=768,574' />
        <CardCateFood title="Chiến hữu trên mọi nẻo đường" imageUrl='https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?w=2000' />
        <CardCateFood title="Tí nữa là tới bến" imageUrl='https://domf5oio6qrcr.cloudfront.net/medialibrary/10032/common-food-allergens.jpg' />
      </ScrollView>
    </View>
  );
}
export default MenuCardsRow;

