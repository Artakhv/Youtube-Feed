import React, { Component } from "react";

export class SearchBar extends Component {
  state = { term: "" };

  onInputChange = event => {
    return this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    // TODO : Make sure we call
    this.props.onFormSubmit(this.state.term);

    // callback from parent component
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
              placeholder={this.props.placeholder}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
