import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>{this.props.label}</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };
}

SearchBar.defaultProps = {
  label: "Search Label"
};

export default SearchBar;
