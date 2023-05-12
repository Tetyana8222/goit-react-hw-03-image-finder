import React, { Component } from 'react';
import { toast } from 'react-toastify';
// import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  state = {
    searchQuery: '',
  };

  handleSubmitForm(event) {
    event.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      toast.error('Please enter something');
      return;
    }
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  }

  render() {
    return (
      <header class="searchbar">
        <form class="form" onSubmit={this.handleSubmitForm}>
          <input
            class="input"
            type="text"
            name="searchQuery"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>
        </form>
      </header>
    );
  }
}
