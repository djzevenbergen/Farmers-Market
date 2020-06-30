import React from "react";
import Home from "./Home";
import Day from "./Day";

class BaseControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: ""
    };
  }

  handleClick = (value) => {
    this.setState({ counter: value.target.value })
  }



  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    let key;

    switch (this.state.counter) {
      case "sunday":
        key = 0;
        break;
      case "monday":
        key = 1;
        break;
      case "tuesday":
        key = 2;
        break;
      case "wednesday":
        key = 3;
        break;
      case "thursday":
        key = 4;
        break;
      case "saturday":
        key = 5;
        break;
      default:
        key = 0;
    }

    currentlyVisibleState = <Home keyword={key} />


    return (
      < React.Fragment >
        {currentlyVisibleState}
        < button onClick={this.handleClick} value="monday" > Monday</button >
        < button onClick={this.handleClick} value="tuesday"> Tuesday</button >
        < button onClick={this.handleClick} value="wednesday"> Wednesday</button >
        < button onClick={this.handleClick} value="thursday"> Thursday</button >
        < button onClick={this.handleClick} value="saturday"> Saturday</button >
        < button onClick={this.handleClick} value="sunday"> Sunday</button >
      </React.Fragment >
    );
  }
}

export default BaseControl;