import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

import { GalleryList } from './ImageGallery.styled';
import PropTypes from 'prop-types';
function ImageGallery({ images, openModal, updateImglink }) {
  console.log('картинки з галереї', images);
  return (
    <GalleryList>
      {images.map(({ id, previewURL, tags, largeImageURL }) => {
        console.log(previewURL);
        return (
          <ImageGalleryItem
            key={id}
            src={previewURL}
            alt={tags}
            largeImageURL={largeImageURL}
            openModal={openModal}
            updateImglink={updateImglink}
          />
        );
      })}
    </GalleryList>
  );
}

export default ImageGallery;

// ImageGallery.propTypes = {
//   images: PropTypes.array.isRequired,
//   selectedItem: PropTypes.func.isRequired,
// };
