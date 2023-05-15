import React, { Component } from 'react';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';

import ApiService from '../components/service/ApiService';
import { Container } from './App.styled';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Spinner from './Loader/Loader';
import Modal from './Modal/Modal';
import LoadMoreButton from './Button/Button';
import fetchApi from '../components/service/ApiService';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    status: 'idle',
    totalHits: null,
    showModal: false,
    modalPicture: '',
    loading: false,
    showBtnLoadMore: false,
  };
  //componentDidUpdate  буде викликатися після кожного фетча, якщо не буде перевірки
  async componentDidUpdate(prevProps, prevState) {
    const { page, searchQuery } = this.state;
    try {
      if (searchQuery !== prevState.searchQuery || page !== prevState.page) {
        const imageData = await ApiService(searchQuery, page);
        console.log(imageData);
        this.setState(prevState => ({
          images: [...prevState.images, ...imageData.hits],
        }));
        // const imagesHits = imageData.hits;
      }
    } catch (error) {
      toast.error(`Sorry something went wrong.`);
      this.setState({ status: 'rejected' });
    }
  }
  ///
  handleSubmitForm = searchQuery => {
    if (this.state.searchQuery === searchQuery) {
      return;
    }
    this.resetState();
    this.setState({ searchQuery });
  };
  /////

  handleSelectedImage = (largeImageUrl, tags) => {
    this.setState({
      selectedImage: largeImageUrl,
      alt: tags,
    });
  };
  resetState = () => {
    this.setState({
      searchQuery: '',
      images: [],
      page: 1,

      alt: null,
      status: 'idle',
      error: null,
    });
  };
  closeModal = () => {
    this.setState({
      showModal: false,
    });
  };
  openModal = () => {
    this.setState({
      showModal: true,
    });
  };
  updateImglink = imgLink => {
    this.setState({ modalPicture: imgLink });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  render() {
    const { images, page, alt, status, showModal, error } = this.state;
    return (
      <Container>
        <SearchBar onSubmit={this.handleSubmitForm} />
        <ToastContainer autoClose={3000} position="top-center" />
        {status === 'pending' && <Spinner />}
        {/* {status === 'rejected' && toast.error(`Sorry something went wrong.`)} */}
        {this.state.images !== [] && (
          <ImageGallery
            images={this.state.images}
            openModal={this.openModal}
            updateImglink={this.updateImglink}
          />
        )}
        <LoadMoreButton onClick={this.loadMore} />
        {this.state.showModal && (
          <Modal onClose={this.closeModal} img={this.state.modalPicture} />
        )}

        {/* {showModal && <ModalOverlay onClose={this.toggleModal}></ModalOverlay>} */}
      </Container>
    );
  }
}
