import { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalOverlay, ModalContainer, Img } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');

    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    console.log('Modal componentWillMount');
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose({ showModal: true });
    }
  };
  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };
  handleClose = event => {
    console.log(event.code);
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };
  closeModal = () => {
    this.setState({
      selectedImage: null,
    });
  };
  render() {
    const { img, tags } = this.props;
    console.log(img);
    return createPortal(
      <ModalOverlay onClick={this.handleBackdropClick}>
        <ModalContainer>
          <Img src={img} alt={tags} />
        </ModalContainer>
      </ModalOverlay>,
      modalRoot
    );
  }
}

export default Modal;
