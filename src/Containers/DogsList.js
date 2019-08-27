import React, { Component } from "react";
import DogCard from "../Components/DogCard"

class DogList extends Component {
 
  render() {
    return <ul className="dogContainer">{this.props.dogs.map(dog => <DogCard key={dog.name} dog={dog}/>)}</ul>;
  }
}

export default DogList;
