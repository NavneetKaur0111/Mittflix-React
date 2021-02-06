const filterMovies = (movies, toMatchWith) => {
  const re = new RegExp(toMatchWith, "gi")
  const filteredMovies = movies.filter((movie) => {
    if (movie.title.match(re) || movie.overview.match(re)) {
      return movie;
    }
  });
  return filteredMovies;
};

export default filterMovies;
