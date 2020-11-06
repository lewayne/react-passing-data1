import React, { Component } from "react";
import MovieCard from "./MovieCard";

class Dashboard extends Component {
	render(){
    	const { users, movies, usersByMovie } = this.props;
      
      	const movieCards = Object.keys(movies).map(
        	movieId => (
            	<MovieCard key = {movieId}
      					   usersInfo = {users}
      					   usersIdWhoLikedMovie={usersByMovie[movieId]}	
      					   movieInfo = {movies[movieId]}
      			/>
           	));

          /* Return JSX */
      return <ul>{movieCards}</ul>;
    }
}

export default Dashboard;