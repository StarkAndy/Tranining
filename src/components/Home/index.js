/* eslint-disable no-new */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {View, StyleSheet} from 'react-native';
import Text from '../Text';

import styled from 'styled-components';

import {
  trendingAllWeek,
  IMAGE_ThumbNail_URL,
  actionMovies,
  adventureMovies,
  fantasyScifiMovies,
} from '../../api/movieService';
import FlatListMovie from '../FlatList';

const HomeScreen = ({navigation}) => {
  //navigation={navigation} pass navigation like this as props for the parent to access
  return (
    <Container>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <Text medium bold color="#83CFDF">
          Trending Movies
        </Text>
        <FlatListMovie
          navigation={navigation}
          url={trendingAllWeek}
          imageurl={IMAGE_ThumbNail_URL}
        />
        <Text medium bold color="#83CFDF">
          Action Movies
        </Text>
        <FlatListMovie
          navigation={navigation}
          url={actionMovies}
          imageurl={IMAGE_ThumbNail_URL}
        />
        <Text medium bold color="#83CFDF">
          Adventure Movies
        </Text>
        <FlatListMovie
          navigation={navigation}
          url={adventureMovies}
          imageurl={IMAGE_ThumbNail_URL}
        />
        <Text medium bold color="#83CFDF">
          Fantasy/ScienceFitction
        </Text>
        <FlatListMovie
          navigation={navigation}
          url={fantasyScifiMovies}
          imageurl={IMAGE_ThumbNail_URL}
        />
      </View>
    </Container>
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
  button: {
    marginTop: 32,
    backgroundColor: '#23A6D9',
    paddingVertical: 12,
    width: 250,
    borderRadius: 10,
    alignItems: 'center',
  },
});

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #373b69;
`;
