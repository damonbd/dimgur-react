import React, { Component } from 'react';
import logo from './images/dimgur-logo.JPG'

import './App.css';

import Uploader from './Components/Uploader/Uploader';
import Modal from './Components/Modal/Modal';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      toaster: {
        isSuccess: false,
        body: ""
      }
    }
  }

  render() {

    return (
      <div className="App backgroundPurple">
        <header className="">
          <img src={logo} />

        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Uploader />

        <Modal title="TitleTest">
          <Uploader />
        </Modal>

      </div>
    );
  }
}

export default App;
