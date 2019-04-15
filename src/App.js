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
import SignIn from './Components/SignIn/SignIn';
import SignOut from './Components/SignOut/SignOut';
import Carousel from './Components/Carousel/Carousel';

// dummy media
import image1 from './images/test-media/image1.png';
import image2 from './images/test-media/image2.jpg';
import image3 from './images/test-media/image3.jpg';
import image4 from './images/test-media/image4.jpeg';
import image5 from './images/test-media/image5.jpg';
import image6 from './images/test-media/image6.jpg';

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
        newImage: " ",
      },
      modal: {
        isOpen: false
      },
      modalImageTest: {
        isOpen: false
      },
      user: {
        username: ""
      },
      gallery: {
        images: this.initImages()
      },
      carousel: {
        index: 0
      },
      modals: {
        uploader: {
          name: "uploader",
          isOpen: false
        },
        signUp: {
          name: "signUp",
          isOpen: false
        },
        signIn: {
          name: "signIn",
          isOpen: false
        },
        carousel: {
          name: "carousel",
          isOpen: false
        }
      }
    }

    this.toasterHandler = this.toasterHandler.bind(this);
    this.galleryHandler = this.galleryHandler.bind(this);
    this.hideToaster = this.hideToaster.bind(this);
    this.modalHandler = this.modalHandler.bind(this);
    this.signUpHandler = this.signUpHandler.bind(this);
    this.signInHandler = this.signInHandler.bind(this);
    this.signOutHandler = this.signOutHandler.bind(this);
    this.updateGallery = this.updateGallery.bind(this);
    this.carouselHandler = this.carouselHandler.bind(this);
  };

  componentDidMount() {
    window.addEventListener('scroll', this.stickyHeader);
    window.addEventListener('scroll', this.updateGallery);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.stickyHeader);
    window.removeEventListener('scroll', this.updateGallery);
  }

  initImages() {
    let images = [];

    let imagesToFormat = [image1, image2, image3, image4, image5, image6];
    imagesToFormat.forEach((url, i) => {
      let image = {};
      image.url = url;
      image.index = i;
      images.push(image);
    });

    images[0].username = "Bobby";
    images[0].username = "Robert";

    return images;
  }

  updateGallery() {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
      let images = this.initImages();

      this.setState({
        images: [...this.state.gallery.images, ...images]
      })
    }
  }

  stickyHeader() {
    if ($(this).scrollTop() > 175) {
      // animate fixed div to small size:
      $('#header').stop().animate({ height: 85, 'padding-top': 20 }, 200);
    } else {
      //  animate fixed div to original size
      $('#header').stop().animate({ height: 175, 'padding-top': 20 }, 200);
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

  modalHandler(modal) {
    var modals = { ...this.state.modals };
    modals[modal.name] = modal;

    this.setState({
      modals: modals
    })
  }

  carouselHandler(index) {
    this.setState({
      carousel: {
        index: index
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

  signInHandler(username) {
    if (username != null) {
      this.setState({
        user: {
          username: username
        }
      })
    }
  }

  signOutHandler() {
    this.setState({
      user: {
        username: ""
      }
    })
  }

  render() {
    let toaster = null;
    let authButtons = null;

    if (this.state.toaster.isVisible) {
      toaster = (
        <Toaster isSuccess={this.state.toaster.isSuccess} body={this.state.toaster.body} hide={this.hideToaster} />
      )
    }

    if (this.state.user.username != "") {
      authButtons = (
        <div className="btn-group">
          <SignOut signOutHandler={this.signOutHandler} toasterHandler={this.toasterHandler} />
        </div>
      )
    }
    else {
      authButtons = (
        <div className="btn-group">
          <Modal visibilityHandler={this.modalHandler} title="Sign in" btnText="Sign In" modal={this.state.modals.signIn}>
            <SignIn signInHandler={this.signInHandler} toasterHandler={this.toasterHandler} modalHandler={this.modalHandler} />
          </Modal>
          <div style={{ paddingLeft: "10px" }}>
            <Modal visibilityHandler={this.modalHandler} title="Thanks for Signing up!" btnText="Sign Up" modal={this.state.modals.signUp}>
              <SignUp signUpHandler={this.signUpHandler} toasterHandler={this.toasterHandler} modalHandler={this.modalHandler} />
            </Modal>
          </div>
        </div>
      )
    }

    return (
      <div className="App container">
        <header id="header" className="header">
            <Modal visibilityHandler={this.modalHandler} title="Upload" btnText="Upload" modal={this.state.modals.uploader}>
              <Uploader toasterHandler={this.toasterHandler} galleryHandler={this.galleryHandler} />
            </Modal>

          <img style={{ height: "fit-content" }} src={logo} />

          {authButtons}
        </header>

        <Modal visibilityHandler={this.modalHandler} title="Carousel of Fun!" modal={this.state.modals.carousel}>
          <Carousel index={this.state.carousel.index} images={this.state.gallery.images} />
        </Modal>

        <Gallery carouselHandler={this.carouselHandler} modalHandler={this.modalHandler} modal={this.state.modals.carousel} images={this.state.gallery.images} newImage={this.state.uploader.newImage} username={this.state.user.username} />

        {toaster}
      </div>
    );
  }
}

export default App;
