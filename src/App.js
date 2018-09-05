import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: "hello"
    }
  }

  testFetch() {

    fetch("http://localhost:8080/jsontest")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });

          //console.log(items);

        },
        (error) => {
          this.setState({
            //
          });

          console.log("this fail");

        }
      )
    
  }

  render() {

    this.testFetch();

    const { items } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <h2> {items} </h2>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
