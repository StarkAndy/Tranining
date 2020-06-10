/* eslint-disable no-new */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import LottieView from 'lottie-react-native';
import {
  Container,
  IntroText,
  IntroTitle,
  IllustrationView,
  DescriptionView,
  AnimationView,
} from '../styledComponents';
import {trendingAllWeek, IMAGE_ThumbNail_URL} from '../../api/movieService';
import Cards from '../Cards/Cards';
const animation = require('../../../assets/ninja.json');
const {width} = Dimensions.get('window');
const PREVIEW_WIDTH = width * 0.27;

const HomeScreen = () => {
  const [loading, loadingStatus] = useState(false);
  const [movieData, addData] = useState([]);
  const getVoteStyle = (value) => {
    if (value > 7.5) {
      return {
        backgroundColor: '#212138',
        color: '#a9f157',
      };
    } else if (value >= 5 && value <= 7.5) {
      return {
        backgroundColor: '#212138',
        color: '#e17f00',
      };
    } else {
      return {
        backgroundColor: '#212138',
        color: 'red',
      };
    }
  };
  new Promise(async (resolve, reject) => {
    const url = trendingAllWeek;
    let test = [];
    try {
      const {data} = await axios.get(url);
      addData(data);
      resolve(data);
    } catch (error) {
      reject(error);
      console.log(error);
    }
  });

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
      <FlatList
        data={movieData.results}
        horizontal={true}
        renderItem={({item, index}) => {
          if (item.original_title && item.original_title.length >= 19) {
            return;
          }
          return (
            <Cards>
              <View
                style={{
                  flex: 1,
                  borderRadius: 5,
                }}>
                <Image
                  style={styles.cardImage}
                  source={{uri: IMAGE_ThumbNail_URL(item.backdrop_path)}}
                />
                <View
                  style={{
                    flex: 1,
                    height: '100%',
                    justifyContent: 'flex-end',

                    marginBottom: 4,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={{alignSelf: 'flex-start', color: '#fff'}}>
                      {item.original_title || item.original_name}
                    </Text>

                    <Text style={getVoteStyle(item.vote_average)}>
                      {item.vote_average}
                    </Text>
                  </View>
                </View>
              </View>
            </Cards>
          );
        }}
      />
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  cardImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
  },
});
