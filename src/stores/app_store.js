import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/app_constants';
import { EventEmitter } from 'events';
import { assign } from 'object-assign';

const CHANGE_EVENT = 'change';

let _movies = [];
let _selected = '';

class AppStore extends EventEmitter {
	constructor() {
		super();

	}

	emitChange() {
		this.emit(CHANGE_EVENT);
	}

	addChangeListener(callback) {
		this.on('change', callback);
	}

	removeChangeListener(callback) {
		this.removeListener('change', callback)
	}
}

AppDispatcher.register(function(payload) {
	let action = payload.action;

	switch(action.actionType){
		case AppConstants.SEARCH_MOVIES:
		
			AppStore.emit(CHANGE_EVENT);
			break;
	}

	return true;
})

export default AppStore;