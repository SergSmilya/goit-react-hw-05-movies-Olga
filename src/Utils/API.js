import axios from 'axios';
const API_KEY = 'ad2c844e7719e1ada80161a84523905b';
const URL = 'https://api.themoviedb.org/3';

export async function APITrending() {
  try {
    return await axios(`${URL}/trending/movie/day?api_key=${API_KEY}`);
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function APIMovie(id) {
  try {
    return await axios(`${URL}/movie/${id}?api_key=${API_KEY}`);
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function APIReview(id) {
  try {
    return await axios(`${URL}/movie/${id}/reviews?api_key=${API_KEY}`);
  } catch (error) {
    console.error(error);
    return error;
  }
}

//
export async function APICast(id) {
  try {
    return await axios(`${URL}/movie/${id}/credits?api_key=${API_KEY}`);
  } catch (error) {
    console.error(error);
    return error;
  }
}
