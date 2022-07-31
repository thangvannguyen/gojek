
import React from 'react';
import { ScrollView } from 'react-native';
import { iconDiscount } from '../constants/icons';
import ItemVoucher from './ItemVoucher';

export default function MenuVoucher() {
  return (
    <ScrollView
      contentContainerStyle={{
        padding: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false} >
      <ItemVoucher text="20 voucher sắp hết hạn" icon={iconDiscount} />
      <ItemVoucher text="Quán ngon gần bạn" />
      <ItemVoucher text="Quán đẹp để chill" /> 
      <ItemVoucher text="Rẻ vô đối"/>
    </ScrollView>
  );
}