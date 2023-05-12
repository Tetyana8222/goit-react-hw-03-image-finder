import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
// import { ToastContainer } from 'react-toastify';
// import axios from 'axios';
// import { ToastContainer } from 'react-toastify';

export class App extends Component {
  state = {
    searchQuery: '',
  };

  handleSubmitForm = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    return (
      <div style={{ width: 1200, margin: '0 auto', padding: 20 }}>
        <SearchBar onSubmit={this.handleSubmitForm} />
      </div>
    );
  }
}
