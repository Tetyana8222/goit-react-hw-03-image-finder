import { GalleryItem, Image } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

import React, { Component } from 'react';

export default class ImageGalleryItem extends Component {
  onImageClick = () => {
    const { updateImglink, openModal, largeImageURL } = this.props;
    updateImglink(largeImageURL);
    openModal();
  };
  render() {
    const { alt, src } = this.props;
    return (
      <GalleryItem>
        <Image src={src} alt={alt} loading="lazy" onClick={this.onImageClick} />
      </GalleryItem>
    );
  }
}
// ImageGallery.propTypes = {
//   alt: PropTypes.string.isRequired,
//   previewURL: PropTypes.string.isRequired,
//   // selectedImage: PropTypes.func,
// };
