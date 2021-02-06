import React, { Component, Fragment } from "react";
import printMovies from "../util/printMovies";

class MyList extends Component {
  state = {
    tableView: false,
  };

  handleView = (tableViewOn) => {
    this.setState((currState) => {
      if (tableViewOn) {
        return { tableView: false };
      } else {
        return { tableView: true };
      }
    });
  };

  manipulateMyList = (movies) => {
    const myList = movies.filter((movie) => {
      return movie.my_list === true;
    });
    return myList;
  };

  getMatchingGenre = (movie, genres) => {
    let matchingGenres = [];
    movie.genre_ids.map((id) => {
      genres.map((genre) => {
        if (genre.id === id) {
          matchingGenres.push(genre.name);
        }
      });
    });
    return matchingGenres;
  };

  printMoviesInTableForm = (genres, movies, handleOnClick) => {
    return movies.map((movie) => {
      const matchingGenres = this.getMatchingGenre(movie, genres);
      return (
        <tr className="movieInTable" key={movie.id}>
          <td>
            <img src={movie.backdrop_path} alt="movie poster" />
          </td>
          <td>
            <div className="title">{movie.title}</div>
          </td>
          <td>
            <div className="rating">{movie.vote_average}/10</div>
          </td>
          <td>
            {matchingGenres.map((genre, index) => {
              return `${index !== 0 ? ", " : ""}${genre}`;
            })}
          </td>
          <td>
            <div
              className="checkMark"
              onClick={() => handleOnClick(movie, movie.my_list)}
            >
              <i className="fa fa-fw fa-times"></i>
            </div>
          </td>
        </tr>
      );
    });
  };

  displayTableview = (genres, myList, handleOnClick) => {
    return (
      <table className="titles-table-wrapper">
        <tbody>{this.printMoviesInTableForm(genres, myList, handleOnClick)}</tbody>
      </table>
    );
  };

  displayPosterView = (myList, handleOnClick) => {
    return (
      <div className="titles-wrapper">{printMovies(myList, handleOnClick)}</div>
    );
  };

  displayMyList = (genres, myList, handleOnClick) => {
    return (
      <Fragment>
        <h1>My List</h1>
        <button
          className="select-view"
          onClick={() => this.handleView(this.state.tableView)}
        >
          {this.state.tableView ? "Poster View" : "Table View"}
        </button>
        {this.state.tableView
          ? this.displayTableview(genres, myList, handleOnClick)
          : this.displayPosterView(myList, handleOnClick)}
      </Fragment>
    );
  };

  render() {
    const { genres, movies, handleOnClick } = this.props;
    const myList = this.manipulateMyList(movies);
    return (
      <Fragment>
        <div className="titleList">
          <div className="title">
            {myList.length > 0 ? (
              this.displayMyList(genres, myList, handleOnClick)
            ) : (
              <h1>Nothing to show. Add something my list.</h1>
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default MyList;
