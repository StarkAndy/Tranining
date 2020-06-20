/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {StatusBar, SafeAreaView, Image} from 'react-native';
import styled from 'styled-components';
import Text from '../Text';
import {Icon as AntDesign} from 'react-native-vector-icons/AntDesign';

import {DstATopComposition} from 'react-native-image-filter-kit';
//import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  MOVIE_DETAILS,
  IMAGE_ThumbNail_URL,
  IMAGE_Poster_URL,
} from '../../api/movieService';
import axios from 'axios';

const MovieDetail = ({route, navigation}) => {
  const {item} = route.params;
  const [movieDataDetails, setMovieDataDetails] = useState([]);

  const url = MOVIE_DETAILS(item.id);

  useEffect(() => {
    async function fetchMovieDataDetails() {
      try {
        const {data} = await axios.get(url);
        //console.log(data, '<----------------');
        setMovieDataDetails(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovieDataDetails();
  });
  return (
    <MovieDetailContainer>
      <StatusBar barStyle="light-content" />
      <MoviePosterContainer>
        <MainMovieBg
          source={
            {uri: IMAGE_Poster_URL(movieDataDetails.poster_path)} || {
              uri: IMAGE_Poster_URL(movieDataDetails.backdrop_path),
            }
          }>
          <SafeAreaView>
            <MenuBar />
            <MovieTitleCaption>
              <Text title heavy>
                {movieDataDetails.original_title}
              </Text>
              <Divider />
              <Text bold>{movieDataDetails.tagline}</Text>
              <Text medium>
                {movieDataDetails.status} | {movieDataDetails.release_date} |{' '}
                {movieDataDetails.vote_average}
              </Text>
            </MovieTitleCaption>
          </SafeAreaView>
          {/* <MovieArt
          source={{uri: IMAGE_Poster_URL(movieDataDetails.poster_path)}}
        /> */}

          {/* <BackButton onPress={() => navigation.goBack()}>

        </BackButton> */}
        </MainMovieBg>
      </MoviePosterContainer>
      <MovieOverViewContainer>
        <MovieInfoContainer>
          <MovieInfo>
            <Text color="black">{movieDataDetails.overview}</Text>
          </MovieInfo>
        </MovieInfoContainer>
      </MovieOverViewContainer>
    </MovieDetailContainer>
  );
};

export default MovieDetail;

const MovieDetailContainer = styled.View`
  flex: 1;
  background-color: #fff;
`;

const MoviePosterContainer = styled.View`
  position: relative;
`;

const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 48px;
  left: 16px;
`;
//clipPath: polygon(0 0, 100% 0%, 100% 68%, 0 100%);
const MovieArt = styled.Image`
  height: 350px;
  width: 100%;
`;
const MovieInfo = styled.View`
  width: 0;
  flex-grow: 1;
  margin-top: 16px;
`;
const MovieInfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px 0;
  margin: 8px 16px;
`;

const MainMovieBg = styled.ImageBackground`
  width: 100%;
  height: 350px;
`;

const MenuBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
`;
const MovieOverViewContainer = styled.View`
  margin-top: -20px;
  padding: 32px;
  background-color: #fff;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`;

const MovieTitleCaption = styled.View`
  padding: 0 32px;
  margin: 200px 0 32px 0;
  background-color: 'rgba(0, 0, 0, 0.5);';
`;

const Divider = styled.View`
  border-bottom-color: #fff;
  border-bottom-width: 2px;
  width: 150px;
  margin: 8px 0;
`;
// For refactoring
{
  /* <View style={styles.container}>
<View style={{width: '100%', flex: 1, marginTop: 64}}>
<Image
  source={require('../../../assets/music.png')}
  style={{width: undefined, height: undefined, flex: 1}}
  resizeMode="contain"
/>
</View>
<View style={{flex: 2, alignItems: 'center'}}>
<Text style={{fontWeight: '100', fontSize: 32}}>Music Screen</Text>
<Text style={{fontWeight: '600', marginVertical: 32}} />
<TouchableOpacity
  style={styles.button}
  onPress={() => {
    navigation.navigate('Home');
  }}>
  <Text style={{color: '#FFF'}}>Go to Home Screen</Text>
</TouchableOpacity>
<TouchableOpacity
  style={[
    styles.button,
    {
      borderColor: '#23A6D9',
      borderWidth: 1,
      marginTop: 12,
      backgroundColor: '#fff',
    },
  ]}
  onPress={() => {
    navigation.goBack();
  }}>
  <Text style={{color: '#23A6D9'}}>Go Back</Text>
</TouchableOpacity>
</View>
</View> */
}
