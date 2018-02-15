import axios from 'axios';
import AppActions from '../actions/app_actions';

const API_KEY = '9a69e3cd&';

export default function searchMoviesCall(movie) {
	const ROOT_URL = 'http://www.omdbapi.com/?';
	const request = axios.get(`${ROOT_URL}apikey=${API_KEY}&s=${movie.title}`);

	request
		.then(response => {
			console.log(response)
			AppActions.receiveMovieResults(response.data.Search);
		})
		.catch(error => {
			alert(error);
		})
};