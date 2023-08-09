import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  CartScreen,
  HomeScreen,
  Notifications,
  Account,
  Categories,
} from '../screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MatirialIcon from 'react-native-vector-icons/MaterialIcons';
import Display from '../utils/Display';
import {Colors} from '../contants';

const BottomTabs = createBottomTabNavigator();

export default () => (
  <BottomTabs.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        position: 'absolute',
        height: Display.setHeight(7),
        backgroundColor: Colors.DEFAULT_WHITE,
        borderTopWidth: 1,
        borderTopColor: Colors.INACTIVE_GREY,
      },
      tabBarActiveTintColor: Colors.DEFAULT_blue,
      tabBarInactiveTintColor: Colors.INACTIVE_GREY,
      tabBarLabelStyle:{
        marginTop:-12
      }
    }}
    op>
    <BottomTabs.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({color}) =>(
          <MatirialIcon name='home' size={23} color={color} />
        ),
      }}
    />
    <BottomTabs.Screen
      name="Categories"
      component={Categories}
      options={{
        tabBarIcon: ({color}) => (
          <MatirialIcon name="category" size={23} color={color} />
        ),
      }}
    />
    <BottomTabs.Screen
      name="Notifications"
      component={Notifications}
      options={{
        tabBarIcon: ({color}) => (
          <Ionicons name="notifications" size={23} color={color} />
        ),
      }}
    />
    <BottomTabs.Screen
      name="Account"
      component={Account}
      options={{
        tabBarIcon: ({color}) => (
          <MatirialIcon name="account-circle" size={23} color={color} />
        ),
      }}
    />
    <BottomTabs.Screen
      name="Cart"
      component={CartScreen}
      options={{
        tabBarIcon: ({color}) => (
          <Ionicons name="cart-outline" size={23} color={color} />
        ),
      }}
    />
  </BottomTabs.Navigator>
);
