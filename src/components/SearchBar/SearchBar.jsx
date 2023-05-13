import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { Header, SearchField, SearchButton } from './SearchBar.styled';
import { FiSearch } from 'react-icons/fi';
// import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  state = {
    searchQuery: '',
  };

  handleQueryChange = event => {
    this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    // if (this.state.searchQuery.trim() === '') {
    //   toast.error('Please enter something');
    //   return;
    // }
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <Header>
        <form onSubmit={this.handleSubmit}>
          <SearchField
            type="text"
            name="searchQuery"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchQuery}
            onChange={this.handleQueryChange}
          />
          <SearchButton type="submit">
            <FiSearch style={{ marginRight: 8 }} />
          </SearchButton>
        </form>
      </Header>
    );
  }
}
