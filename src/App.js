import React, { Component } from 'react';
import SearchForm from './components/search_form';
import AppStore from './stores/app_store';

function getAppState() {
	return {

	}
}


class App extends Component {
	getInitialState() {
		return getAppState();
	};

	componentDidMount() {
		AppStore.addChangeListener(this._onChange);
	};

	componentWillUnmount() {
		AppStore.removeChangeListener(this._onChange);
	};

	_onChange() {
		this.setState(getAppState())
	}

	render() {
    	return (
      		<div className="row">
      			<div className="col-md-8 col-md-offset-2">
        			<SearchForm />
        		</div>
      		</div>
    	);
  	}
}

export default App;
