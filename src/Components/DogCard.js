import React from "react";

class DogCard extends React.Component {
  state={clicked: false}

  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }

  render() {
    return (
      <li>
        {this.state.clicked ? <h2 className="bark">Ruff</h2> : null}
        <img alt="" src={this.props.dog.img} />
        <button onClick={this.handleClick}>Bark</button>
      </li>
    );
  }
}

export default DogCard;
