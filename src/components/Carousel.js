//yarn add react-native-swiper


import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('window');

const Carousel = () => {
  const images = [
    {
      uri: "https://th.bing.com/th/id/R.c7e89b930f8aa73cf72d5f167d1d16ed?rik=3obl%2fhI6QdNIMA&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2ffree-beautiful-place-wallpaper-hd-173.jpg&ehk=92RRpT4hrYheMDBZkK0HhLLXx9%2fGDjnafeDmbgjE1K8%3d&risl=&pid=ImgRaw&r=0",
      title: "Beautiful Beach",
    },
    {
      uri: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
      title: "Serene Forest",
    },
    {
      uri: "https://cdn.pixabay.com/photo/2016/11/18/17/20/maldives-1838087_960_720.jpg",
      title: "Tropical Paradise",
    },
  ];

  return (
    <View style={styles.container}>
      <Swiper
        showsButtons
        autoplay
        autoplayTimeout={5}
        loop
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
      >
        {images.map((image, index) => (
          <View key={index} style={styles.slide}>
            <Image source={{ uri: image.uri }} style={styles.image} />
            <Text style={styles.title}>{image.title}</Text>
          </View>
        ))}
      </Swiper>
      {/* <TouchableOpacity style={styles.getStarted}><Text style={styles.textStarted} >Get Started</Text></TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
  image: {
    width: width * 0.9,
    height: height * 0.5,
    borderRadius: 15,
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  dot: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#4267B2',
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 5,
  },
  // getStarted:{
  //   marginBottom:20,backgroundColor:"blue",padding:8,borderRadius:10,width:180
  // },
  // textStarted:{fontSize:20,fontWeight:"bold" ,color:"white" ,textAlign:"center",padding:5}
});

export default Carousel;
