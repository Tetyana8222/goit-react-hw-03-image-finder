import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
// import { ToastContainer } from 'react-toastify';
// import axios from 'axios';
// import { ToastContainer } from 'react-toastify';
import ApiService from '../components/service/ApiService';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    searchQuery: '',
    // images: [],
    // page: 1,
  };

  handleSubmitForm = searchQuery => {
    console.log(searchQuery);
    // if (this.state.searchQuery === searchQuery) {
    //   return;
    // }
    // // this.resetState();
    this.setState({ searchQuery });
  };

  render() {
    return (
      <Container>
        <SearchBar onSubmit={this.handleSubmitForm} />
      </Container>
    );
  }
}
