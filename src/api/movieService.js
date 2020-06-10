// API DOMAIN
const API_URL = 'https://api.themoviedb.org/3';
// API NAME Get Trending By Week
const API_NAME = '/trending/all/week';
// API KEY
const API_KEY = '16a8a2a7bdfd3096b8c18cbae420307c';
const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/';

export const IMAGE_ThumbNail_URL = (imagePath) =>
  `${BASE_IMAGE_URL}w185${imagePath}`;
export const IMAGE_Poster_URL = (imagePath) =>
  `${BASE_IMAGE_URL}w500${imagePath}`;
//EXAMPLE to get Movies List Hot Trends
//https://api.themoviedb.org/3/trending/all/week?api_key=your_api_key

export const getImdbLink = (imdbID) => `https://www.imdb.com/title/${imdbID}`;
export const trendingAllWeek = `${API_URL}${API_NAME}?api_key=${API_KEY}`;
