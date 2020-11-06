import React, { Component } from "react";


/**
 * Ce composant a comme props usersInfo - usersIdWhoLikedMovie	- movieInfo
 * il affiche :
 *               + le nom d'un film
 			     + la liste des users qui aiment ce film ou rien
 */
class MovieCard extends Component{
  	/**
      * usersInfo : Contient tous les utilisateurs
      * usersIdWhoLikedMovie : contient les ID des users qui aiment un film
      * movieInfo : contient tous les utilisateurs
     */ 
	render(){
    	const { usersInfo, usersIdWhoLikedMovie, movieInfo} = this.props;
      
      return(
      	<li key={movieInfo.id}>
			<h2>{movieInfo.name}</h2>
			<h3>Liked By:</h3>
				{!usersIdWhoLikedMovie || usersIdWhoLikedMovie.lenght === 0 ?
                 	(<p>None of the current users liked this movie.</p>) : 
                 	(<ul>
                 		{
                 			usersIdWhoLikedMovie && usersIdWhoLikedMovie.map(
                 				userId => {
                						return (
                 							<li key={userId}>
                 								<p>{usersInfo[userId].name}</p> 	
                 							</li>		
                 						)
                				}
                 			)
                		}
                 	</ul>)
                }
		 </li>
	   );
    }
}

export default MovieCard;