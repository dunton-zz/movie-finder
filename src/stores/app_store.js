import Dispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import { assign } from 'object-assign';
import searchMovies from '../utils/appApi';
import util from 'util';
import ActionTypes from '../constants/app_constants';

const CHANGE_EVENT = 'change';

let _movies = [];
let _selected = '';

class AppStore extends EventEmitter {
	constructor() {
		super();
		Dispatcher.register(this._registerToActions.bind(this));

	}

	setMovieResults(movies) {
		_movies=movies;

	}

	_registerToActions(action) {
		switch(action.actionType) {
			case ActionTypes.SEARCH_MOVIES:
				console.log(`Search for ${action.movie.title}`);
				
				this.emitChange(CHANGE_EVENT);
				break;
			case ActionTypes.RECEIVE_MOVIE_RESULTS:
				this.setMovieResults(action.movies);
				this.emitChange(CHANGE_EVENT);
				break;
			default:
				break;
		}
	}
	
	emitChange(CHANGE_EVENT) {
		this.emit(CHANGE_EVENT);
	}

	getMovies() {
		return _movies;
	}

	// HOOK BACK TO CHANGED EVENT
	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	}

	// REMOVES LISTENER FROM CHANGED EVENT
	removeChangeListener(callback) {
		this.removeChangeListener(CHANGE_EVENT, callback);
	}

}



export default new AppStore();