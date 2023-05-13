import { GalleryItem, Image } from './ImageGalleryItem.styled';

function ImageGalleryItem({ imageURL, alt, selectedItem }) {
  return (
    <GalleryItem class="gallery-item">
      <Image src={imageURL} alt={alt} onClick={selectedItem} />
    </GalleryItem>
  );
}
export default ImageGalleryItem;
