import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

import { GalleryList } from './ImageGallery.styled';

function ImageGalleryItem({ images, selectedImage }) {
  return (
    <GalleryList>
      {images.map((id, webformatURL, largeImageURL) => (
        <ImageGalleryItem
          key={id}
          previewImage={webformatURL}
          selectedImage={largeImageURL}
        />
      ))}
    </GalleryList>
  );
}
