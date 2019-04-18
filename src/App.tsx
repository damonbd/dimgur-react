import React, { Component } from 'react';
import $ from 'jquery';

import './App.css';
import logo from './images/dimgur-logo.JPG';

import Gallery from './Components/Gallery/Gallery';
import Modal from './Components/Modal/Modal';
import Toaster from './Components/Toaster/Toaster';
import Uploader from './Components/Uploader/Uploader';
import SignUp from './Components/Authentication/SignUp/SignUp';
import SignIn from './Components/Authentication/SignIn/SignIn';
import SignOut from './Components/Authentication/SignOut/SignOut';
import Carousel from './Components/Carousel/Carousel';

import IImage from './interfaces/IImage';
import IToaster from './interfaces/IToaster';

// dummy media
import image1 from './images/test-media/image1.png';
import image2 from './images/test-media/image2.jpg';
import image3 from './images/test-media/image3.jpg';
import image4 from './images/test-media/image4.jpeg';
import image5 from './images/test-media/image5.jpg';
import image6 from './images/test-media/image6.jpg';

interface IAppProps {
}

interface IAppState {
  isLoaded: boolean;
  toaster: IToaster;
  uploader: any;
  modal: any;
  user: any;
  gallery: any;
  carousel: any;
  modals: any;
}

class App extends Component<IAppProps, IAppState> {

  constructor(props: IAppProps) {
    super(props);
    this.state = {
      isLoaded: false,
      toaster: { isVisible: false, isSuccess: false, body: "" },
      uploader: {
        newImage: "",
      },
      modal: {
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
          title: "Upload",
          isOpen: false
        },
        signUp: {
          name: "signUp",
          title: "Thanks For Signing Up!",
          isOpen: false
        },
        signIn: {
          name: "signIn",
          title: "Sign In",
          isOpen: false
        },
        carousel: {
          name: "carousel",
          title: "Carousel of Fun!",
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
    let images: IImage[] = [];

    let imagesToFormat = [image1, image2, image3, image4, image5, image6];
    imagesToFormat.forEach((url, i) => {
      let image: any = {};
      image.url = url;
      image.index = i;
      images.push(image);
    });

    images[0].username = "Bobby";
    images[0].username = "Robert";

    return images;
  }

  // isnt updating gallery.images
  updateGallery() {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
      let images = this.initImages();

      // this.setState({
      //   images: [...this.state.gallery.images, ...images]
      // })
    }
  }

  stickyHeader() {
    // if ($(this).scrollTop() > 175) {
    //   // animate fixed div to small size:
    //   $('#header').stop().animate({ height: 85, 'padding-top': 20 }, 200);
    // } else {
    //   //  animate fixed div to original size
    //   $('#header').stop().animate({ height: 175, 'padding-top': 20 }, 200);
    // }
  }

  toasterHandler(isVisible: boolean, isSuccess: boolean, body: string) {
    this.setState({
      toaster: { isVisible, isSuccess, body }
    });

    setTimeout(() => {
      this.setState({
        toaster: { isVisible: false, isSuccess, body }
      })
    }, 3000)
  };

  hideToaster() {
    this.setState({
      toaster: { isVisible: false, isSuccess: false, body: "" }
    });
  }

  galleryHandler(newImage: any) {
    // mock username here, would be returned from server with username already
    newImage.username = this.state.user.username;

    this.setState({
      uploader: {
        newImage: newImage
      }
    })
  }

  modalHandler(modal: any, isOpen: boolean) {
    var modals = { ...this.state.modals };

    modal.isOpen = isOpen;
    modals[modal.name] = modal;

    this.setState({
      modals: modals
    })
  }

  carouselHandler(index: number) {
    this.setState({
      carousel: {
        index: index
      }
    })
  }

  signUpHandler(username: any) {
    if (username != null) {
      this.setState({
        user: {
          username: username
        }
      })
    }
  }

  signInHandler(username: string) {
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

  openModal = (modal: any) => {
    modal = { ...modal };
    this.modalHandler(modal, true);
  }

  render() {
    let toaster = null;
    let authButtons = null;

    if (this.state.toaster.isVisible) {
      toaster = (
        <Toaster isSuccess={this.state.toaster.isSuccess} body={this.state.toaster.body} hide={this.hideToaster} />
      )
    }

    if (this.state.user.username !== "") {
      authButtons = (
        <div className="btn-group">
          <SignOut signOutHandler={this.signOutHandler} toasterHandler={this.toasterHandler} />
        </div>
      )
    }
    else {
      authButtons = (
        <div className="">
          <button onClick={() => this.openModal(this.state.modals.signIn)} className="btn btn-primary">Sign In</button>
          <button onClick={() => this.openModal(this.state.modals.signUp)} className="btn btn-primary app-btn-sign-up">Sign Up</button>
        </div>
      )
    }

    return (
      <div className="App container">
        <header id="header" className="header">

          <button onClick={() => this.openModal(this.state.modals.uploader)} className="btn btn-primary app-btn">Upload</button>

          <img style={{ height: "fit-content" }} src={logo} alt="site logo" />

          {authButtons}
        </header>

        <Gallery carouselHandler={this.carouselHandler} modalHandler={this.modalHandler} modal={this.state.modals.carousel} images={this.state.gallery.images} newImage={this.state.uploader.newImage} username={this.state.user.username} />

        <Modal visibilityHandler={this.modalHandler} modal={this.state.modals.signIn}>
          <SignIn signInHandler={this.signInHandler} toasterHandler={this.toasterHandler} modalHandler={this.modalHandler} modal={this.state.modals.signIn} />
        </Modal>

        <Modal visibilityHandler={this.modalHandler} modal={this.state.modals.signUp}>
          <SignUp signUpHandler={this.signUpHandler} toasterHandler={this.toasterHandler} modalHandler={this.modalHandler} modal={this.state.modals.signUp} />
        </Modal>

        <Modal visibilityHandler={this.modalHandler} modal={this.state.modals.uploader}>
          <Uploader toasterHandler={this.toasterHandler} galleryHandler={this.galleryHandler} modalHandler={this.modalHandler} modal={this.state.modals.uploader} />
        </Modal>

        <Modal visibilityHandler={this.modalHandler} modal={this.state.modals.carousel}>
          <Carousel index={this.state.carousel.index} images={this.state.gallery.images} />
        </Modal>

        {toaster}
      </div>
    );
  }
}

export default App;
