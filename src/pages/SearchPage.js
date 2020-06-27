import React, {Component} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {fetchDataHomePage} from './actions';

class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    this.props.fetchDataHomePage();
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

  getData(item) {
    return (
      <View>
        <Text>{item.title}</Text>
      </View>
    );
  }
  render() {
    return (
      <View>
        {this.props.loading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={this.props.data}
            renderItem={({item}) => this.getData(item)}
          />
        )}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log('+++++++++++++', state.data);
  // const SearchPageData = state.data.data;

  if (state === undefined) {
    return {};
  }
  return {
    data: state.data,
    loading: state.loading,
  };
};

const mapStateDispatch = {
  fetchDataHomePage,
};

export default connect(mapStateToProps, mapStateDispatch)(SearchPage);
