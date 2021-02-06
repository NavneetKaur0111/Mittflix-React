import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import * as MovieAPI from "./lib/MovieAPI";
import Header from "./components/Header";
import MoviesList from "./components/MoviesList";
import MyList from "./components/MyList";
import filterMovies from "./util/filterMovies";
import sortGenres from "./util/sortGenres";

class App extends Component {
  state = {
    movies: [],
    genres: [],
    inputValue: "",
  };

  componentDidMount = () => {
    MovieAPI.getAll().then((results) => this.setState({ movies: results }));
    MovieAPI.genres().then((results) => this.setState({ genres: results }));
  };

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleAddOrDelete = (movie, alreadyAdded) => {
    if (alreadyAdded) {
      MovieAPI.removeFromList(movie);
    } else {
      MovieAPI.addToList(movie);
    }
    this.componentDidMount();
  };

  render = () => {
    const { genres, movies, inputValue } = this.state;
    const FilteredMovies = filterMovies(movies, this.state.inputValue);
    const SortedGenres = sortGenres(genres);

    return (
      <Fragment>
        <Header
          input={inputValue}
          handleInputChange={this.handleInputChange}
          resultsLength={FilteredMovies.length}
        />
        <Switch>
          <Route path="/mylist">
            <MyList
            genres={genres}
              movies={FilteredMovies}
              handleOnClick={this.handleAddOrDelete}
            />
          </Route>
          <Route path="/">
            <MoviesList
              genres={SortedGenres}
              movies={FilteredMovies}
              handleOnClick={this.handleAddOrDelete}
            />
          </Route>
        </Switch>
      </Fragment>
    );
  };
}

export default App;
