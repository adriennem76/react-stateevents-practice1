import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import DogsList from "./Containers/DogsList"

class App extends Component {

  state={dogs: []}

  componentDidMount(){
    fetch("http://localhost:4000/dogs")
    .then(resp => resp.json())
    .then(data => this.setState({dogs: data}))
  }

  render() {
    return <DogsList dogs={this.state.dogs} />;
  }
}

export default App;
