
import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import MenuHeader from '../components/MenuHeader';
import MenuVoucher from '../components/MenuVoucher';
import MenuBanner from '../components/MenuBanner';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    paddingTop: StatusBar.currentHeight + 70,
  },
  header: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    zIndex: 9
  }
});

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Header />
      </View>
      <ScrollView>
        <View style={styles.container}>
          <MenuHeader />
          <MenuVoucher />
          <MenuBanner />
          <Text>Try editing me! 🎉</Text>
        </View>
      </ScrollView>
    </SafeAreaView>

  );
}
export default HomeScreen;

