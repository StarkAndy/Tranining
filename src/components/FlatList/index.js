import React, {useState, useEffect} from 'react';
import {Text, View, FlatList, Image, StyleSheet} from 'react-native';
import axios from 'axios';

import Cards from '../Cards/Cards';

import {useNavigation} from '@react-navigation/native';

const FlatListMovie = (props) => {
  const [movieData, setMovieData] = useState([]);
  const navigation = useNavigation(); // remove props.navigation and use only navigation if we want to go hooks route
  useEffect(() => {
    async function fetchMovieData() {
      try {
        const {data} = await axios.get(props.url);
        //console.log(data, '<----------------');
        setMovieData(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovieData();
  });
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

  if (!props.url) {
    return null;
  }

  return (
    <View>
      <FlatList
        data={movieData.results}
        keyExtractor={(item, index) => index.toString()} //to fix the warnings saying Failed child context type: Invalid child context virtualizedCell.cellKey
        horizontal={true}
        renderItem={({item, index}) => {
          if (item.original_title && item.original_title.length >= 19) {
            return;
          }
          return (
            <Cards
              onPress={() => {
                navigation.navigate('MovieDetail', {
                  item: item,
                }); //added props.navigation and in HomeScreen navigation ={navigation} pass props like this
              }}>
              <View
                style={{
                  flex: 1,
                  borderRadius: 5,
                }}>
                <Image
                  style={styles.cardImage}
                  source={{uri: props.imageurl(item.poster_path)}}
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

export default FlatListMovie;
const styles = StyleSheet.create({
  cardImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: 100,
    resizeMode: 'cover',
  },
});
