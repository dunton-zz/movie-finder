import React, { Component } from 'react';


class Movie extends Component {
	render() {
		return (
			<div className="well">
				{this.props.movie.Title}
			</div>
		)
	}
}

export default Movie;