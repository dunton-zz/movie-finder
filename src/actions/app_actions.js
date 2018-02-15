import Dispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/app_constants';
import searchMoviesCall from '../utils/appApi';



class AppActions {
	searchMovies(movie) {
		
		Dispatcher.dispatch({
			actionType: ActionTypes.SEARCH_MOVIES,
			movie: movie
		})


	}

	receiveMovieResults(movies) {
		console.log(movies);
		Dispatcher.dispatch({
			actionType: ActionTypes.RECEIVE_MOVIE_RESULTS,
			movies: movies
		})
	}
}

export default new AppActions();