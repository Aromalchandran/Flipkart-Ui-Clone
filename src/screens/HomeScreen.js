import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import Separator from '../componets/Separator';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Carousel from '../componets/Carousel';
import RescentlyViewedStores from '../componets/RescentlyViewedStores';
import Line from '../componets/Line';
const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'#0C73EB'}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <View style={styles.header}>
        <Text style={styles.FlipkartText}>Flipkart</Text>
        <Text style={styles.ExploreText}>Explore</Text>
        <Text style={styles.plusText}>plus</Text>

        <Icon
          name="notifications"
          size={20}
          color="#fff"
          style={styles.notificationIcon}
        />

        <Ionicons
          name="cart-outline"
          size={20}
          color="#fff"
          style={styles.cartIcon}
          onPress={() => navigation.navigate('Cart')}
        />
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon name="menu" size={26} color="#fff" style={styles.menuIcon} />
        </TouchableOpacity>

        <View style={styles.SearchBarContainer}>
          <Icon name="search" size={20} style={styles.searchIcon} />
          <Text
            style={styles.searchContentText}
            onPress={() => navigation.navigate('Cart')}>
            {' '}
            Search for Products,Brands and More
          </Text>
          <View style={styles.micOverlay}>
            <Icon name="mic" size={24} color="#0C73EB" style={styles.micIcon} />
          </View>
        </View>
      </View>
      <ScrollView>
        <Carousel />

        <View style={styles.secondSection}>
          <View style={styles.secondImgContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <Image
                source={require('../assets/images/4344fd3c296d233a.webp')}
                style={styles.secondSectionImg}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <Image
                source={require('../assets/images/phone.png')}
                style={styles.secondSectionImg}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <Image
                source={require('../assets/images/electronics.png')}
                style={styles.secondSectionImg}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <Image
                source={require('../assets/images/appliances.png')}
                style={styles.secondSectionImg}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <Image
                source={require('../assets/images/beauty.png')}
                style={styles.secondSectionImg}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.secondSectionTextContainer}>
            <Text
              style={styles.secondSectionText}
              onPress={() => navigation.navigate('Cart')}>
              Top offers
            </Text>
            <Text
              style={styles.secondSectionText}
              onPress={() => navigation.navigate('Cart')}>
              Mobiles
            </Text>
            <Text
              style={styles.secondSectionText}
              onPress={() => navigation.navigate('Cart')}>
              {' '}
              Electronics{'\n'}& Accessories{' '}
            </Text>
            <Text
              style={styles.secondSectionText}
              onPress={() => navigation.navigate('Cart')}>
              {' '}
              TVs&{'\n'}
              Appliances{' '}
            </Text>
            <Text
              style={styles.secondSectionText}
              onPress={() => navigation.navigate('Cart')}>
              Beauty,Toys{'\n'}
              Food, Sports....{' '}
            </Text>
          </View>
          <View style={styles.secondImgContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <Image
                source={require('../assets/images/home.png')}
                style={styles.secondSectionImg}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <Image
                source={require('../assets/images/travel.png')}
                style={styles.secondSectionImg}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <Image
                source={require('../assets/images/grocery.png')}
                style={styles.secondSectionImg}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <Image
                source={require('../assets/images/appliances.png')}
                style={styles.secondSectionImg}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <Image
                source={require('../assets/images/furniture.png')}
                style={styles.secondSectionImg}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.secondSectionTextContainer}>
            <Text
              style={styles.secondSectionText}
              onPress={() => navigation.navigate('Cart')}>
              Furnitures
            </Text>
            <Text
              style={styles.secondSectionText}
              onPress={() => navigation.navigate('Cart')}>
              Flight Tickets
            </Text>
            <Text
              style={styles.secondSectionText}
              onPress={() => navigation.navigate('Cart')}>
              Grocery
            </Text>
            <Text
              style={styles.secondSectionText}
              onPress={() => navigation.navigate('Cart')}>
              {' '}
              Home{'\n'}
              Appliances{' '}
            </Text>
            <Text
              style={styles.secondSectionText}
              onPress={() => navigation.navigate('Cart')}>
              {' '}
              Furniture
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Image
              source={require('../assets/images/oppo-reno7.webp')}
              style={styles.secondSectionImgBanner}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.thirdSectionContainer}>
          <Text style={styles.headlineText}>Recenty Viewed Stores</Text>
          <RescentlyViewedStores />
          <Text>Sponsored</Text>
        </View>

        <Line />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F2F2F2',
  },
  header: {
    height: 110,
    width: 445,
    backgroundColor: '#0C73EB',
  },
  menuIcon: {
    marginTop: -24,
    marginLeft: 12,
  },
  FlipkartText: {
    fontSize: 22,
    fontStyle: 'italic',
    fontWeight: '800',
    color: '#fff',
    marginTop: 12,
    marginLeft: 50,
  },
  ExploreText: {
    fontSize: 10,
    fontWeight: '500',
    fontStyle: 'italic',
    color: '#fff',
    marginLeft: 50,
    marginTop: -5,
  },
  plusText: {
    fontSize: 11,
    fontWeight: '700',
    fontStyle: 'italic',
    color: '#F8E831',
    marginLeft: 80,
    marginTop: -13,
  },
  notificationIcon: {
    marginLeft: 282,
    marginTop: -24,
  },
  cartIcon: {
    marginLeft: 310,
    marginTop: -22,
  },
  SearchBarContainer: {
    width: 346,
    height: 38,
    backgroundColor: '#fff',
    marginTop: 16,
    marginLeft: 6,
    flexDirection: 'row',
  },
  searchIcon: {
    marginLeft: 8,
    marginTop: 8,
  },
  searchContentText: {
    marginTop: 10,
    marginLeft: 4,
  },
  micIcon: {
    marginLeft: 62,
    marginTop: 6,
  },
  micOverlay: {
    overlayColor: '#0C73EB',
    shadowColor: '#0c73eb',

    opacity: 5,
  },
  secondSection: {
    width: 400,
    height: 295,
    backgroundColor: '#FFF',
  },
  secondImgContainer: {
    flexDirection: 'row',
  },
  secondSectionImg: {
    width: 65,
    height: 65,
    marginLeft: 6,
    marginTop: 12,
  },
  secondSectionTextContainer: {
    flexDirection: 'row',
  },
  secondSectionText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#000',
    padding: 8.8,
    marginLeft: 7.5,
    margin: -10,
  },
  secondSectionImgBanner: {
    width: 336,
    height: 65,
    marginLeft: 12,
    marginTop: 15,
    borderRadius: 6,
  },
  thirdSectionContainer: {
    width: 400,
    height: 295,
    backgroundColor: '#FFF',
    marginTop: 4,
  },
  headlineText: {
    fontSize: 17,
    fontWeight: '500',
    color: '#000',
    marginLeft: 12,
    marginTop: 14,
  },
});
