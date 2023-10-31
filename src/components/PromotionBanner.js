import React, { useState, useEffect } from 'react';
import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import { gStyle, images, colors } from '../constants'; // components
import {
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons
} from 'react-native-vector-icons';
import PromotionPlay from './PromotionPlay';
const promotionItems = [
  {
    image: images.live,
    title: 'Live Show',
    buttonLabel: 'Watch Now'
  },
  {
    image: images.prod,
    title: 'Media Productions',
    buttonLabel: 'Book'
  },
  {
    image: images.events,
    title: 'Check Events',
    buttonLabel: 'Calendar'
  },
  {
    image: images.venue,
    title: 'Venue Rentals',
    buttonLabel: 'Explore'
  }
];

function PromotionBanner() {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     const nextIndex = (currentItemIndex + 1) % promotionItems.length;
  //     setCurrentItemIndex(nextIndex);
  //   }, 2000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, [currentItemIndex]);

  const iconMap = {
    'Live Show': <FontAwesome name="play" size={24} color={colors.black} />,
    'Media Productions': (
      <MaterialCommunityIcons name="book" size={24} color={colors.black} />
    ),
    'Check Events': (
      <MaterialCommunityIcons name="calendar" size={24} color={colors.black} />
    ),
    'Venue Rentals': (
      <MaterialCommunityIcons name="briefcase" size={24} color={colors.black} />
    )
  };

  const promotionItem = promotionItems[currentItemIndex];

  return (
    <Swiper
      style={styles.wrapper}
      loop={true}
      showsPagination={false}
      autoplay={true}
      autoplayTimeout={4}
    >
      {promotionItems.map((item, index) => (
        <ImageBackground
          key={index}
          source={item.image}
          style={styles.imageBackground}
        >
          <View style={styles.containerContent}>
            <Text style={styles.titlee}>
              {item.title == 'Live Show'
                ? 'Lifestyle Talks: Shelly'
                : item.title == 'Media Productions'
                ? 'You Dream, We Produce!'
                : item.title == 'Check Events'
                ? 'Experience Life!'
                : item.title == 'Venue Rentals'
                ? 'Perfect Venues'
                : ''}
            </Text>

            <Text
              style={
                item.title == 'Live Show'
                  ? styles.title
                  : item.title == 'Media Productions'
                  ? styles.titleM
                  : item.title == 'Check Events'
                  ? styles.titleEx
                  : item.title == 'Venue Rentals'
                  ? styles.titleV
                  : ''
              }
            >
              {item.title}
            </Text>
            <View style={(gStyle.flexRowSpace, { padding: 5 })}>
              <PromotionPlay
                onPress={() => null}
                text={item.buttonLabel}
                iconName={item.title}
                icon={iconMap[item.title]}
              />
            </View>
          </View>
        </ImageBackground>
      ))}
    </Swiper>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: 480
  },
  imageBackground: {
    flex: 1
  },
  containerContent: {
    bottom: 24,
    position: 'absolute',
    width: '100%',
    zIndex: 1
  },
  image: {
    alignSelf: 'center',
    height: 69,
    marginBottom: 24,
    width: 291
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16
  },
  titleM: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F28A2E',
    marginBottom: 16
  },
  titleEx: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5BD9D9',
    marginBottom: 16
  },
  titleV: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F22738',
    marginBottom: 16
  },

  titlee: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16
  }
});

export default React.memo(PromotionBanner);
// #F22738
// #F28A2E
// #5BD9D9
