import React, { Component } from "react";

import "./autoCompleteText.css";

export class Autocomplete extends Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: "",
    };
  }

  static defaultProperty = {
    suggestions: [],
  };

  onClick = (e) => {
    const { onSearch } = this.props;
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText,
    });
    onSearch(e.currentTarget.innerText);
  };

  onChange = (e) => {
    const { suggestions, onSearch } = this.props;
    const userInput = e.currentTarget.value;

    const result = suggestions.map((item) => {
      if (item.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1) {
        return item.name;
      }
    });

    const filteredSuggestions = result.filter((item) => item);

    if (userInput.toLowerCase() === "") {
      onSearch("");
    }

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value,
    });
  };
  render() {
    const {
      onChange,
      onClick,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput,
      },
    } = this;

    let suggestionsListComponent;
    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul className="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              return (
                <li key={suggestion} onClick={onClick}>
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div class="no-suggestions">
            <em>No suggestions!</em>
          </div>
        );
      }
    }
    return (
      <div className="AutoCompleteText">
        <input
          type="text"
          onChange={onChange}
          value={userInput}
          placeholder="Search Legends"
        />
        {suggestionsListComponent}
      </div>
    );
  }
}
export default Autocomplete;
