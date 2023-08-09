//import { View } from 'react-native';
import React from 'react';

import BottomTab from './BottomTab';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MatirialIcon from 'react-native-vector-icons/MaterialIcons';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Line from '../componets/Line';
const Drawer = createDrawerNavigator();

const DrawerContent = ({navigation}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.homeButton} activeOpacity={12}>
        <MatirialIcon
          name={'home'}
          size={23}
          color={'#fff'}
          style={styles.homeIcon}
        />
        <Text
          style={styles.homeText}
          title="Go back"
          onPress={() => navigation.goBack()}>
          Home
        </Text>
        <Image
          source={require('../assets/images/fk-logo_1.png')}
          resizeMode="contain"
          style={styles.flipLogo}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.zoneText}>
        <Text>Flipkart Plus Zone</Text>
      </TouchableOpacity>
      <Line style={styles.line} />

      <TouchableOpacity style={styles.categorieTextContainer}>
        <MatirialIcon name={'apps'} size={20} />
        <Text style={styles.categorieText}>All Categories</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categorieTextContainer}>
        <MatirialIcon name={'storefront'} size={20} />
        <Text style={styles.categorieText}>Trending Store</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categorieTextContainer}>
        <MatirialIcon name={'storefront'} size={20} />
        <Text style={styles.categorieText}>More on Flipkart</Text>
      </TouchableOpacity>
      <Line style={styles.line} />
      <TouchableOpacity style={styles.categorieTextContainer}>
        <MatirialIcon name={'translate'} size={20} />
        <Text style={styles.categorieText}>Language</Text>
      </TouchableOpacity>
      <Line style={styles.line} />
      <TouchableOpacity style={styles.categorieTextContainer}>
        <MatirialIcon name={'sell'} size={20} />
        <Text style={styles.categorieText}>Offer Zone</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categorieTextContainer}>
        <MatirialIcon name={'work'} size={20} />
        <Text style={styles.categorieText}>Sell on Flipkart</Text>
      </TouchableOpacity>
      <Line style={styles.line} />
      <TouchableOpacity style={styles.categorieTextContainer}>
        <MatirialIcon name={'open-in-browser'} size={20} />
        <Text style={styles.categorieText}>My Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categorieTextContainer}>
        <MatirialIcon name={'sell'} size={20} />
        <Text style={styles.categorieText}>Coupons</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categorieTextContainer}>
        <MatirialIcon name={'favorite'} size={20} />
        <Text style={styles.categorieText}>My Wishilist</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.categorieTextContainer}
        onPress={() => navigation.navigate('Cart')}>
        <MatirialIcon name={'shopping-cart'} size={20} />
        <Text style={styles.categorieText}>My Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categorieTextContainer}>
        <MatirialIcon name={'person'} size={20} />
        <Text style={styles.categorieText}>My Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categorieTextContainer}>
        <MatirialIcon name={'notifications'} size={20} />
        <Text style={styles.categorieText}>My Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categorieTextContainer}>
        <MatirialIcon name={'chat'} size={20} />
        <Text style={styles.categorieText}>My Chat</Text>
      </TouchableOpacity>
      <Line style={styles.line} />
      <TouchableOpacity style={styles.categorieTextContainer}>
        <Text style={styles.categorieText}>Notification Preferences</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categorieTextContainer}>
        <Text style={styles.categorieText}>Help Centre</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categorieTextContainer}>
        <Text style={styles.categorieText}>Privacy Policy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categorieTextContainer}>
        <Text style={styles.categorieText}>Legal</Text>
      </TouchableOpacity>
    </View>
  );
};

const DrawerNavigator = ({navigation}) => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerLabel: '',
        drawerContentContainerStyle: {marginTop: 12},
      }}
      drawerContent={() => <DrawerContent />}>
      <Drawer.Screen
        name="BottomTab"
        component={BottomTab}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({
  header: {
    width: 280,
    height: 95,
    backgroundColor: '#0C73EB',
  },
  homeIcon: {
    marginLeft: 15,
  },
  homeText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 12,
    marginTop: 2,
  },
  homeButton: {
    marginTop: 50,
    flexDirection: 'row',
  },
  flipLogo: {
    width: 25,
    height: 25,
    marginLeft: 154,
  },
  zoneText: {
    marginTop: 26,
    paddingBottom: 22,
    marginLeft: 12,
  },
  categorieTextContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 10,
    padding: 2,
    alignItems: 'center',
  },
  categorieText: {
    paddingLeft: 12,
  },
});
