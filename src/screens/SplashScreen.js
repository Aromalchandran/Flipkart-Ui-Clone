import React, {useEffect} from 'react';
import {View,StyleSheet, StatusBar,Image} from 'react-native';

import Separator from '../componets/Separator';
const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Drawer');
    }, 4000);
  });
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'#047BD5'}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <Image style={styles.Icon} source={require('../assets/images/fk-logo_1.png')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#047BD5',
    justifyContent:'center',
  },
  Icon:{
    width:45,
    height:45,
  },
});

export default SplashScreen;
