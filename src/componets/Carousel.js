import {View, FlatList, Image, Dimensions} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Images} from '../contants';
import Display from '../utils/Display';
const Carousel = () => {
  const flatListRef = useRef();
  const screenWidth = Dimensions.get('window').width;
  const [activeIndex, setActiveIndex] = useState(0);
  // Auto Scroll
  useEffect(() => {
    let interval = setInterval(() => {
      if (activeIndex === carouselData.length - 1) {
        flatListRef.current.scrollToIndex({
          index: 0,
          animation: true,
        });
      } else {
        flatListRef.current.scrollToIndex({
          index: activeIndex + 1,
          animation: true,
        });
      }
    }, 3000);
    return () => clearInterval(interval);
  });
  const getItemLayout = (data, index) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index: index,
  });
  // Data for carousel
  const carouselData = [
    {
      id: '01',
      image: Images.Banner2,
    },
    {
      id: '2',
      image: Images.Banner1,
    },
    {
      id: '3',
      image: Images.Banner3,
    },
    {
      id: '4',
      image: Images.Banner4,
    },
    {
      id: '05',
      image: Images.Banner5,
    },
    {
      id: '06',
      image: Images.Banner6,
    },
  ];
  const renderItem = ({item, index}) => {
    return (
      <View>
        <Image
          source={item.image}
          resizeMode="stretch"
          style={{height: 165, width: Display.setWidth(98), marginLeft: 2}}
        />
      </View>
    );
  };
  const handleScroll = event => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    //console.log({scrollPosition});

    const index = scrollPosition / screenWidth;
    // console.log({index});
    setActiveIndex(index);
  };
  // Dot Indicators
  const renderDotIndicators = () => {
    return carouselData.map((dot, index) => {
      if (activeIndex === index) {
        return (
          <View
            key={index}
            style={{
              backgroundColor: '#fff',
              height: 8,
              width: 14,
              borderRadius: 8,
              marginHorizontal: 6,
            }}
          />
        );
      } else {
        return (
          <View
            key={index}
            style={{
              backgroundColor: '#C8C8C8',
              height: 8,
              width: 8,
              borderRadius: 6,
              marginHorizontal: 4,
            }}></View>
        );
      }
    });
  };
  return (
    <View>
      <FlatList
        data={carouselData}
        ref={flatListRef}
        keyExtractor={item => item.id}
        getItemLayout={getItemLayout}
        renderItem={renderItem}
        horizontal={true}
        pagingEnabled={true}
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: -16,
        }}>
        {renderDotIndicators()}
      </View>
    </View>
  );
};

export default Carousel;
