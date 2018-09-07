import React, { Component } from 'react';
//import logo from './logo.svg';
import logo from './images/dimgur-logo.JPG'

import './App.css';

import Uploader from './Components/Uploader/Uploader';
import Modal from './Components/Modal/Modal';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: "hello"
    }
  }

  // testFetch() {

  //   fetch("http://localhost:8080/jsontest")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         this.setState({
  //           isLoaded: true,
  //           items: result
  //         });
  //       },
  //       (error) => {
  //         console.log("this fail");
  //       }
  //     )
    
  // }

  render() {

    //this.testFetch();

    const { items } = this.state;

    return (
      <div className="App backgroundPurple">
        <header className="">
          <img src={logo} />

        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      <Uploader />

      <Modal />

      </div>
    );
  }
}

export default App;
