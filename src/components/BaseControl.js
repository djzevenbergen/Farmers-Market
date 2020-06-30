import React from "react";
import Home from "./Home";

class BaseControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleClick = (val) => {
    this.setState({ counter: val })
  }


  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.counter === 0) {
      currentlyVisibleState = <Home />
    }
    return (
      < React.Fragment >
        {currentlyVisibleState}
        < button onClick={this.handleClick} > {buttonText}</button >
      </React.Fragment >
    );
  }
}

export default BaseControl;