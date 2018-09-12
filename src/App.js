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

    this.toasterHandler = this.toasterHandler.bind(this);
  };

  toasterHandler(e) {
    //e.preventDefault()
    this.setState({
      toaster: {
        isVisible: true,
        isSuccess: false,
        body: "toaster"
      }
    });

    setTimeout(() => {
      this.setState({
        toaster: {
          isVisible: false
        }
      })
    }, 2000)
  };

  render() {

    // let toaster = (
    //   <Toaster isVisible={this.state.toasterIsVisible} />
    // )

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

        {this.state.toaster.isVisible ? <Toaster isSuccess={this.state.toaster.isSuccess} body={this.state.toaster.body} /> : null}
      
      </div>
    );
  }
}

export default App;
