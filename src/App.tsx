import React, { Component } from 'react';
var $ = require('jquery');
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Carousel from './Components/Carousel/Carousel';
import Gallery from './Components/Gallery/Gallery';
import Modal from './Components/Modal/Modal';
import SignIn from './Components/Authentication/SignIn/SignIn';
import SignOut from './Components/Authentication/SignOut/SignOut';
import SignUp from './Components/Authentication/SignUp/SignUp';
import Toaster from './Components/Toaster/Toaster';
import Uploader from './Components/Uploader/Uploader';
import Loading from './Components/Loading/Loading';
import Settings from './Components/Settings/Settings';

import ICarousel from './interfaces/ICarousel';
import IGallery from './interfaces/IGallery';
import IImage from './interfaces/IImage';
import IModal from './interfaces/IModal';
import IToaster from './interfaces/IToaster';
import IUser from './interfaces/IUser';

import './App.css';

// dummy media
import image1 from './images/test-media/image1.png';
import image2 from './images/test-media/image2.jpg';
import image3 from './images/test-media/image3.jpg';
import image4 from './images/test-media/image4.jpeg';
import image5 from './images/test-media/image5.jpg';
import image6 from './images/test-media/image6.jpg';
import SettingsButton from './Components/Settings/SettingsButton';

interface IAppProps { }

interface IAppState {
  isLoaded: boolean;
  routes: { showMainPage: boolean, showSettings: boolean };
  isApiRunning: boolean;
  toaster: IToaster;
  user: IUser;
  gallery: IGallery;
  carousel: ICarousel;
  modals: { [key: string]: any, uploader: IModal, signUp: IModal, signIn: IModal, carousel: IModal };
  isMobileView: boolean;
}

class App extends Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      isLoaded: false,
      routes: {
        showMainPage: true,
        showSettings: false
      },
      isApiRunning: true,
      toaster: { isVisible: false, isSuccess: false, body: "" },
      user: {
        username: ""
      },
      gallery: {
        images: []
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
        },
      },
      isMobileView: false
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
    this.settingsHandler = this.settingsHandler.bind(this);
  };

  componentDidMount() {
    window.addEventListener('scroll', this.updateGallery);
    this.checkScreenSize();

    this.fetchImages();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateGallery);
    window.removeEventListener("checkScreenSize", this.checkScreenSize.bind(this));
  }

  fetchImages() {
    let images: IImage[] = [];

    if (this.state.isApiRunning) {
      // get images from api or pretend to
      const url = "http://localhost:8080/getImages";
      fetch(url)
        .then((response) => {
          response.json()
            .then(body => {
              body.forEach((item: IImage, i: number) => {
                let image: any = {};
                image.url = item.url;
                image.index = i;
                images.push(image);
              });
              this.setState({
                gallery: {
                  images: images
                }
              });
            });
        })
        .catch((error) => {
          console.log("api not running, init dummy images");
          this.initDummyImages();

          this.setState({
            isApiRunning: false
          });

          setTimeout(() => {
            this.setState({
              isLoaded: true
            });
          }, 1000);

        });
    }
    else {
      this.initDummyImages();
    }
  }

  initDummyImages() {
    let images: IImage[] = [];

    let imagesToFormat = [image1, image2, image3, image4, image5, image6, image1];
    imagesToFormat.forEach((url, i) => {
      let image: any = {};
      image.url = url;
      image.index = i;
      images.push(image);
    });

    images[0].username = "Bobby";
    images[0].username = "Robert";

    let newGallery: IGallery = { ...this.state.gallery };
    newGallery.images = [...this.state.gallery.images, ...images];

    this.setState({
      gallery: newGallery
    });

    setTimeout(() => {
      this.setState({
        isLoaded: true
      });
    }, 1000);
  }

  // appends more images if user has scrolled to bottom of displayed images
  updateGallery() {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
      this.fetchImages();
    }
  };

  toasterHandler(isVisible: boolean, isSuccess: boolean, body: string) {
    this.setState({
      toaster: { isVisible, isSuccess, body }
    });

    setTimeout(() => {
      this.setState({
        toaster: { isVisible: false, isSuccess, body }
      });
    }, 3000);
  };

  hideToaster() {
    this.setState({
      toaster: { isVisible: false, isSuccess: false, body: "" }
    });
  };

  galleryHandler(newImage: any) {
    let images = [newImage, ...this.state.gallery.images];
    images.forEach((image, index) => {
      image.index = index;
    });

    this.setState({
      gallery: {
        images: [newImage, ...this.state.gallery.images]
      }
    });
  };

  modalHandler(modal: any, isOpen: boolean) {
    var modals = { ...this.state.modals };

    modal.isOpen = isOpen;
    modals[modal.name] = modal;

    this.setState({
      modals: modals
    });
  };

  carouselHandler(index: number) {
    this.setState({
      carousel: {
        index: index
      }
    });
  };

  signUpHandler(username: any) {
    if (username != null) {
      this.setState({
        user: {
          username: username
        }
      });
    }
  };

  signInHandler(username: string) {
    if (username != null) {
      this.setState({
        user: {
          username: username
        }
      });
    }
  };

  signOutHandler() {
    this.setState({
      user: {
        username: ""
      },
      routes: {
        showMainPage: true,
        showSettings: false
      }
    });
  };

  settingsHandler() {
    this.setState({
      routes: {
        showMainPage: !this.state.routes.showMainPage,
        showSettings: !this.state.routes.showSettings
      }
    })
  }

  openModal = (modal: any) => {
    modal = { ...modal };
    this.modalHandler(modal, true);
  };

  // initial screen size
  checkScreenSize() {
    let current = (window.innerWidth <= 760);
    if (current !== this.state.isMobileView) {
      this.setState({
        isMobileView: current
      })
    }
  };

  render() {
    let toRender = null;
    let header = null;
    let toaster = null;
    let authButtons = null;
    let loading = null;
    let appClass = "";

    if (this.state.toaster.isVisible) {
      toaster = (
        <Toaster isSuccess={this.state.toaster.isSuccess} body={this.state.toaster.body} hide={this.hideToaster} />
      )
    }

    if (this.state.user.username !== "") {
      authButtons = (
        <ul className="navbar-nav ml-auto">
          <SignOut signOutHandler={this.signOutHandler} toasterHandler={this.toasterHandler} />
          <SettingsButton SettingsHandler={this.settingsHandler} showSettingsText={!this.state.routes.showSettings} />
        </ul>
      )
    }
    else {
      authButtons = (
        <ul className="navbar-nav ml-auto">
          <li onClick={() => this.openModal(this.state.modals.signIn)} className="nav-item">
            <a className="nav-link" href="#">Sign In</a>
          </li>
          <li onClick={() => this.openModal(this.state.modals.signUp)} className="nav-item">
            <a className="nav-link" href="#">Sign Up</a>
          </li>
        </ul>
      )
    }

    if (!this.state.isLoaded) {
      loading = (
        <Loading></Loading>
      )
    }

    if (!this.state.isMobileView) {
      appClass = "App container";
    }
    else {
      appClass = "App"
    }

    header = (
      <div>
        <ReactCSSTransitionGroup transitionName="slide-from-top" transitionLeaveTimeout={1000}>
          {loading}
        </ReactCSSTransitionGroup>

        <nav className="navbar-dimgur navbar navbar-expand-md navbar-dark bg-dark">
          <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <ul className="navbar-nav mr-auto">
              <li onClick={() => this.openModal(this.state.modals.uploader)} className="nav-item">
                {/* <button onClick={() => this.openModal(this.state.modals.uploader)} className="btn btn-primary app-btn">Upload</button> */}
                <a className="nav-link" href="#">Upload</a>
              </li>
            </ul>
          </div>
          <div className="ml-auto order-0">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
            {authButtons}
          </div>
        </nav>
      </div>
    )

    if (this.state.routes.showMainPage) {
      toRender = (
        <div>
          {header}

          <div style={{ backgroundColor: "red" }} >
            <Carousel index={this.state.carousel.index} images={this.state.gallery.images} />
          </div>

          <ReactCSSTransitionGroup transitionName="slide-from-top" transitionEnterTimeout={400} transitionLeaveTimeout={400}>
            <Gallery carouselHandler={this.carouselHandler} modalHandler={this.modalHandler} modal={this.state.modals.carousel} images={this.state.gallery.images} username={this.state.user.username} />
          </ReactCSSTransitionGroup>

          <Modal visibilityHandler={this.modalHandler} modal={this.state.modals.signIn}>
            <SignIn signInHandler={this.signInHandler} toasterHandler={this.toasterHandler} modalHandler={this.modalHandler} modal={this.state.modals.signIn} />
          </Modal>

          <Modal visibilityHandler={this.modalHandler} modal={this.state.modals.signUp}>
            <SignUp signUpHandler={this.signUpHandler} toasterHandler={this.toasterHandler} modalHandler={this.modalHandler} modal={this.state.modals.signUp} />
          </Modal>

          <Modal visibilityHandler={this.modalHandler} modal={this.state.modals.uploader}>
            <Uploader toasterHandler={this.toasterHandler} galleryHandler={this.galleryHandler} modalHandler={this.modalHandler} modal={this.state.modals.uploader} username={this.state.user.username} />
          </Modal>

          <Modal visibilityHandler={this.modalHandler} modal={this.state.modals.carousel}>
            <Carousel index={this.state.carousel.index} images={this.state.gallery.images} />
          </Modal>

          <ReactCSSTransitionGroup transitionName="slide-from-top" transitionEnterTimeout={400} transitionLeaveTimeout={400}>
            {toaster}
          </ReactCSSTransitionGroup>
        </div>
      )
    }
    else if (this.state.routes.showSettings) {
      toRender = (
        <div>
          {header}

          <Settings toasterHandler={this.toasterHandler} />
        </div>
      )
    }


    return (
      <div className={appClass}>
        {toRender}
      </div>
    );
  }
}

export default App;
