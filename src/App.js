import React, { Component } from 'react';
import $ from 'jquery';

import './App.css';
import logo from './images/dimgur-logo.JPG'

import Gallery from './Components/Gallery/Gallery';
import Modal from './Components/Modal/Modal';
import Toaster from './Components/Toaster/Toaster';
import Uploader from './Components/Uploader/Uploader';
import ImageModal from './Components/ImageModal/ImageModal';
import SignUp from './Components/SignUp/SignUp';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      toaster: {
        isVisible: false,
        isSuccess: false,
        body: " "
      },
      uploader: {
        newImage: " "
      },
      modal: {
        isOpen: false
      },
      modalImageTest: {
        isOpen: false
      },
      signUp: {
        modalIsOpen: false
      },
      user: {
        username: ""
      }
    }

    this.toasterHandler = this.toasterHandler.bind(this);
    this.galleryHandler = this.galleryHandler.bind(this);
    this.hideToaster = this.hideToaster.bind(this);
    this.modalHandler = this.modalHandler.bind(this);
    this.signUpModalHandler = this.signUpModalHandler.bind(this);
    this.signUpHandler = this.signUpHandler.bind(this);
  };

  componentDidMount() {
    window.addEventListener('scroll', this.stickyHeader)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.stickyHeader);
  }

  stickyHeader() {
    // Get the header
    var header = document.getElementById("header");

    // Get the offset position of the navbar
    var sticky = header.offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    if (window.pageYOffset > sticky) {
      header.classList.add("header-sticky");
    } else {
      header.classList.remove("header-sticky");
    }
  }

  toasterHandler(isVisible, isSuccess, body) {
    this.setState({
      toaster: {
        isVisible: isVisible,
        isSuccess: isSuccess,
        body: body
      }
    });

    setTimeout(() => {
      this.setState({
        toaster: {
          isVisible: false
        }
      })
    }, 5000)
  };

  hideToaster() {
    this.setState({
      toaster: {
        isVisible: false
      }
    });
  }

  galleryHandler(newImage) {

    // mock username here, would be returned from server with username already
    newImage.username = this.state.user.username;

    this.setState({
      uploader: {
        newImage: newImage
      }
    })
  }

  modalHandler(isOpen) {
    this.setState({
      modal: {
        isOpen: isOpen != null ? isOpen : false
      }
    })
  }

  signUpModalHandler(isOpen) {
    this.setState({
      signUp: {
        modalIsOpen: isOpen != null ? isOpen : false
      }
    })
  }

  signUpHandler(username) {
    if (username != null) {
      this.setState({
        user: {
          username: username
        }
      })
    }

  }

  render() {
    let toaster = null;

    if (this.state.toaster.isVisible) {
      toaster = (
        <Toaster isSuccess={this.state.toaster.isSuccess} body={this.state.toaster.body} hide={this.hideToaster} />
      )
    }

    return (
      <div className="App container">
        <header id="header" className="header">
          <Uploader toasterHandler={this.toasterHandler} galleryHandler={this.galleryHandler} modalHandler={this.modalHandler} />

          <img style={{ height: "fit-content" }} src={logo} />

          <Modal visibilityHandler={this.signUpModalHandler} title="Thanks for Signing up!" btnText="Sign Up" isOpen={this.state.signUp.modalIsOpen} >
            <SignUp signUpHandler={this.signUpHandler} toasterHandler={this.toasterHandler} signUpModalHandler={this.signUpModalHandler} />
          </Modal>
        </header>

        <Modal visibilityHandler={this.modalHandler} title="TitleTest" isOpen={this.state.modal.isOpen} >
          <Uploader toasterHandler={this.toasterHandler} galleryHandler={this.galleryHandler} modalHandler={this.modalHandler} />
        </Modal>

        <ImageModal title="ImageTest" isOpen={this.state.modalImageTest.isOpen} >
          <img src="https://www.html5rocks.com/static/images/tutorials/easy-hidpi/chrome1x.png" />
        </ImageModal>

        <Gallery newImage={this.state.uploader.newImage} username={this.state.user.username} />

        {toaster}
      </div>
    );
  }
}

export default App;
