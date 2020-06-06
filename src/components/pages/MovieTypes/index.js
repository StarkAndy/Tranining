import React, {useState, useEffect} from 'react';
import {Text, View, FlatList} from 'react-native';

//mport moviesLists from '../../../MockData/movietyes';
const MovieTypes = () => {
  const [loading, loadingStatus] = useState(false);
  const [movieData, addData] = useState([]);

  //fetching data using json
  async function fetchData() {
    const res = await fetch(
      'https://api.themoviedb.org/3/genre/movie/list?api_key=283886de79bcba5aa77acfe24aa51983&language=en-US',
    );
    res
      .json()
      .then((res) => addData(res))
      .catch(() => console.log('data'));
  }
  useEffect(() => {
    fetchData();
  });

  //rendering data
  return (
    <View>
      <Text />
      <FlatList
        data={movieData.genres}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingLeft: 20,
                paddingRight: 20,
                paddingBottom: 20,
              }}>
              <Text>{item.name}</Text>
              <Text>{index + 1}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default MovieTypes;
