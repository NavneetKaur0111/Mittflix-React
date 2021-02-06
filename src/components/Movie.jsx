import React from "react";

const Movie = (props) => {
  const { movie, handleOnClick } = props;

  return (
    <div className="movie">
      <img src={movie.poster_path} alt="movie poster" />
      <div className="overlay">
        <div className="title">{movie.title}</div>
        <div className="rating">{movie.vote_average}/10</div>
        <div className="plot">{movie.overview}</div>
        <div
          data-toggled={movie.my_list}
          className="listToggle"
          onClick={() => handleOnClick(movie, movie.my_list)}
        >
          <div>
            <i className="fa fa-fw fa-plus"></i>
            <i className="fa fa-fw fa-check"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
