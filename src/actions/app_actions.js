import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/app_constants';


class AppActions {
	searchMovies(movie) {
		
		AppDispatcher.dispatch({
			actionType: AppConstants.SEARCH_MOVIES,
			movie: movie
		})
	}
}

export default new AppActions();