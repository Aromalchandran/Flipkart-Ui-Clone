import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import BottomTab from './src/navigation/BottomTab';
import SplashScreen from './src/screens/SplashScreen';
import { RescentlyViewedScreen } from './src/screens';
import DrawerNavigator from './src/navigation/DrawerNavigator';
const Stack = createStackNavigator();
export default () => {
  return (
    <NavigationContainer >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Drawer" component={DrawerNavigator} options={{headerShown:false}} />
        <Stack.Screen name="RecentyViewdScreen" component={RescentlyViewedScreen} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
