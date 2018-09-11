import React, { Component } from 'react';
import logo from './images/dimgur-logo.JPG'


import './App.css';

import Uploader from './Components/Uploader/Uploader';
import Modal from './Components/Modal/Modal';
import Toaster from './Components/Toaster/Toaster';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,

      toasterIsVisible: false,
      toasterIsSuccess: false,
      toasterBody: ""

    }

    this.toasterHandler = this.toasterHandler.bind(this);
  };

  toasterHandler(e) {
    e.preventDefault()
    this.setState({
      toasterIsVisible: true,
      toasterIsSuccess: false,
      toasterBody: "toaster words"
    })
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

        {/* {toaster} */}
        {this.state.toasterIsVisible ? <Toaster isSuccess={this.state.toasterIsSuccess} body={this.state.toasterBody} /> : null}
        {/* <Toaster isVisible={this.state.toaster.isVisible} success={this.state.toaster.isSuccess} body={this.state.toaster.body} /> */}
      
      </div>
    );
  }
}

export default App;
