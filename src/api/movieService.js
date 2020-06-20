// API DOMAIN
const API_URL = 'https://api.themoviedb.org/3';
// API KEY
const API_KEY = '16a8a2a7bdfd3096b8c18cbae420307c';

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/';

// API NAME Get Trending By Week
const TRENDING_WEEK = '/trending/all/week';
const GENRE_PATTERN = '/discover/movie';
const ACTION_GENRE = '&with_genres=28';
const ADVENTURE_GENRE = '&with_genres=12';
const FANTASY_SCIFI_GENRE = '&with_genres=14,878';
export const IMAGE_ThumbNail_URL = (imagePath) =>
  `${BASE_IMAGE_URL}w185${imagePath}`;
export const IMAGE_Poster_URL = (imagePath) =>
  `${BASE_IMAGE_URL}w500${imagePath}`;
export const MOVIE_DETAILS = (movieid) =>
  `${API_URL}/movie/${movieid}?api_key=${API_KEY}&language=en-US`;
//EXAMPLE to get Movies List Hot Trends
//https://api.themoviedb.org/3/trending/all/week?api_key=your_api_key

export const getImdbLink = (imdbID) => `https://www.imdb.com/title/${imdbID}`;
export const trendingAllWeek = `${API_URL}${TRENDING_WEEK}?api_key=${API_KEY}`;

export const actionMovies = `${API_URL}${GENRE_PATTERN}?api_key=${API_KEY}${ACTION_GENRE}`;
export const adventureMovies = `${API_URL}${GENRE_PATTERN}?api_key=${API_KEY}${ADVENTURE_GENRE}`;
export const fantasyScifiMovies = `${API_URL}${GENRE_PATTERN}?api_key=${API_KEY}${FANTASY_SCIFI_GENRE}`;
//https://api.themoviedb.org/3/discover/movie?api_key=16a8a2a7bdfd3096b8c18cbae420307c&with_genres=28
