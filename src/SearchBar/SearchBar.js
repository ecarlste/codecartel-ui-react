import React, { Component } from "react";
import { Segment, Form, Search } from "semantic-ui-react";
// import "semantic-ui-css/semantic.min.css";

class SearchBar extends Component {
  state = { term: "" };

  render() {
    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>{this.props.label}</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </Form.Field>
        </Form>
      </Segment>
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
