import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {

  handleOnchange = (e) => {
    this.props.handleInputChange(e)
  }

  render() {
    const { input, resultsLength } = this.props;
    return (
      <header className="header">
        <Link to="/">
          <img
            src="https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png"
            alt="netflix-font"
            border="0"
          />
        </Link>
        <div id="navigation" className="navigation">
          <nav>
            <ul>
              <li>
                <Link to="/myList">My List</Link>
              </li>
            </ul>
          </nav>
        </div>
        <form id="search" className="search">
          <input
            type="search"
            placeholder="Search for a title..."
            value={input}
            onChange={this.handleOnchange}
          />
          <div className="searchResults">{input !== "" ? `Found ${resultsLength} movies with the query "${input}"` : null}</div>
        </form>
      </header>
    );
  }
}

export default Header;
