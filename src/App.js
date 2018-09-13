import React, { Component } from 'react';
import logo from './images/dimgur-logo.JPG'
import ReactDOM from 'react-dom';
import $ from 'jquery';

import './App.css';

import Uploader from './Components/Uploader/Uploader';
import Modal from './Components/Modal/Modal';
import Toaster from './Components/Toaster/Toaster';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      toaster: {
        isVisible: false,
        isSuccess: false,
        body: " "
      }
    }

    //bindings
    this.toasterHandler = this.toasterHandler.bind(this);
  };

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

  render() {

    let toaster = null;

    if (this.state.toaster.isVisible) {
      toaster = (
        <Toaster isSuccess={this.state.toaster.isSuccess} body={this.state.toaster.body} />
      )
    }

    return (
      <div className="App backgroundPurple">
        <header className="">
          <img src={logo} />

        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Uploader test="test" toasterHandler={this.toasterHandler} />

        <Modal title="TitleTest">
          <Uploader test="test" toasterHandler={this.toasterHandler} />
        </Modal>

        {toaster}
      </div>
    );
  }
}

export default App;
