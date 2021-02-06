import Movie from "../components/Movie";
import React from 'react';

const printMovies = (movies, handleOnClick) => {
  return movies.map((movie) => {
    return (
      <Movie movie={movie} key={movie.id} handleOnClick={handleOnClick} />
    );
  });
};

export default printMovies;