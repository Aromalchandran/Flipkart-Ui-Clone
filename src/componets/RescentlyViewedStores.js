import { StyleSheet, Text, View,FlatList,Image,TouchableOpacity,Button, TouchableHighlight } from 'react-native'
import React from 'react'
import { Images } from '../contants';
import Display from '../utils/Display';

const RescentlyViewedStores = () => {
    
    // Data for RecentlyViewed list
    const RecentlyViewedData = [
        {
          id: '01',
          image: Images.RecentImg1,
          text:"Air Cooler"
        },
        {
          id: '2',
          image: Images.RecentImg2,
          text:"Speaker"
        },
        {
          id: '3',
          image: Images.RecentImg3,
          text:"Grinder Mixer"
        },
        {
          id: '4',
          image: Images.RecentImg4,
          text:"Wallpepers"
        },
        {
          id: '05',
          image: Images.RecentImg5,
          text:"Mobiles"
        },
        {
          id: '06',
          image: Images.RecentImg6,
          text:"Mobiles"
        },
      ];
      const renderItem = ({item, index,navigation}) => {
        return (
         
            <TouchableOpacity style={styles.itemContainer}  >
            <Image source={item.image} style={styles.imageStyle} resizeMode='contain'/>
            <Text style={styles.text} >{item.text}</Text>
            </TouchableOpacity>

         
        );
      };
  return (
    <View style={{marginTop:20,marginLeft:12}}>
      <FlatList
        data={RecentlyViewedData}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

export default RescentlyViewedStores

const styles = StyleSheet.create({
    itemContainer:{
        width: 98,
        height: 120,
        borderColor: '#C8C8C8',
        borderRadius: 3,
        borderWidth: 1,
        backgroundColor: '#fff',
        marginLeft: 4,
        alignItems: 'center',
        
       
    },
    imageStyle:{
        width:67,
        height:74,
        marginTop:4
    },
    text:{
        fontSize:12,
        color:"#000"
    }
})