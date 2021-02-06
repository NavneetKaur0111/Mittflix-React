import React, { Component } from "react";
import printMovies from "../util/printMovies";

class MoviesList extends Component {
  manipulateMovies = (movies, genre) => {
    let genreMovies = [];
    movies.map((movie) => {
      movie.genre_ids.map((id) => {
        if (genre.id === id) {
          genreMovies.push(movie);
        }
      });
    });
    return genreMovies;
  };

  displayMovies = (genres, movies, handleOnClick) => {
    return genres.map((genre) => {
      const genreMovies = this.manipulateMovies(movies, genre);
      if (genreMovies.length > 0) {
        return (
          <div className="title" key={genre.id}>
            <h1>{genre.name}</h1>
            <div className="titles-wrapper">
              {movies ? printMovies(genreMovies, handleOnClick) : null}
            </div>
          </div>
        );
      }
    });
  };

  render() {
    const { genres, movies, handleOnClick } = this.props;
    return (
      <div className="titleList">
        {movies.length > 0 ? (
          this.displayMovies(genres, movies, handleOnClick)
        ) : (
          <h1>No movies to show</h1>
        )}
      </div>
    );
  }
}

export default MoviesList;
