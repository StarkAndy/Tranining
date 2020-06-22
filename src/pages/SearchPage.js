import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {loadDataAtHomePage} from './actions';

class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    this.props.loadDataAtHomePage();
    fetch(
      'https://api.themoviedb.org/3/search/movie?api_key=283886de79bcba5aa77acfe24aa51983&language=en-US&query=Superman&page=1&include_adult=false',
      {
        method: 'GET',
      },
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({data});
        console.log(data, '+++++++++++++++++');
      })
      .catch((error) => {
        console.log('Error', error);
      });
  }

  _renderMovieInformation(item) {
    if (item === undefined) {
      return null;
    }
    return (
      <View>
        <Text>{item.title}</Text>
        <Text>Movie Image </Text>
        <Text>{item.vote_average}</Text>
      </View>
    );
  }
  render() {
    return (
      <View>
        <Text>{this.props.data}</Text>
        {this._renderMovieInformation()}
        {/* <FlatList
          data={this.state.data.results}
          renderItem={({item}) => {
            this._renderMovieInformation(item);
          }}
        /> */}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  if (state === undefined) {
    return {data: 'not yet'};
  }

  console.log('+++++++++++++', state.data);

  const SearchPageData = state.data.data;

  return {
    data: SearchPageData,
  };
};

const mapStateDispatch = {
  loadDataAtHomePage,
};

export default connect(mapStateToProps, mapStateDispatch)(SearchPage);
