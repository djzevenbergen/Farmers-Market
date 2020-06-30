import React from "react";
import Home from "./Home";
import Produce from "./Produce";
import { Button } from "reactstrap";
import Day from "./Day";

class BaseControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: "sunday",
      month: "January",
      type: "day"

    };
  }

  handleClick() {
    this.setState(lastState => ({
      formVisibleOnPage: !lastState.formVisibleOnPage
    }));
  }


  handleClick = (value) => {
    const val = value.target.value;
    if (value.target.value.includes("day")) {
      this.setState(prevState => ({ month: prevState.month, day: val, type: "day" }));
    } else {
      this.setState(prevState => ({ day: prevState.day, month: val, type: "month" }));
    }
  }


  render() {
    let currentlyVisibleDay = this.state.day;
    let currentlyVisibleMonth = this.state.month;
    let buttonText = null;
    let key;
    let monthKey;

    switch (this.state.day) {
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
        break;
    };

    switch (this.state.month) {
      case "January":
        monthKey = 0;
        break;
      case "February":
        monthKey = 1;
        break;
      case "March":
        monthKey = 2;
        break;
      case "April":
        monthKey = 3;
        break;
      case "May":
        monthKey = 4;
        break;
      case "June":
        monthKey = 5;
        break;
      case "July":
        monthKey = 6;
        break;
      case "August":
        monthKey = 7;
        break;
      case "September":
        monthKey = 8;
        break;
      case "October":
        monthKey = 9;
        break;
      case "November":
        monthKey = 10;
        break;
      case "December":
        monthKey = 11;
        break;

      default:
        break;
    };




    currentlyVisibleDay = <Home keyword={key} />
    currentlyVisibleMonth = <Produce keyword={monthKey} />


    return (
      <React.Fragment >
        < Button color="danger" onClick={this.handleClick} value="monday" > Monday</Button >
        < Button color="danger" onClick={this.handleClick} value="tuesday"> Tuesday</Button >
        < Button color="danger" onClick={this.handleClick} value="wednesday"> Wednesday</Button >
        < Button color="danger" onClick={this.handleClick} value="thursday"> Thursday</Button >
        < Button color="danger" onClick={this.handleClick} value="saturday"> Saturday</Button >
        < Button color="danger" onClick={this.handleClick} value="sunday"> Sunday</Button >
        {currentlyVisibleDay}
        <hr />
        < Button color="danger" onClick={this.handleClick} value="January" > January</Button >
        < Button color="danger" onClick={this.handleClick} value="February"> February</Button >
        < Button color="danger" onClick={this.handleClick} value="March"> March</Button >
        < Button color="danger" onClick={this.handleClick} value="April"> April</Button >
        < Button color="danger" onClick={this.handleClick} value="May"> May</Button >
        < Button color="danger" onClick={this.handleClick} value="June"> June</Button >
        < Button color="danger" onClick={this.handleClick} value="July" > July</Button >
        < Button color="danger" onClick={this.handleClick} value="August"> August</Button >
        < Button color="danger" onClick={this.handleClick} value="September"> September</Button >
        < Button color="danger" onClick={this.handleClick} value="October"> October</Button >
        < Button color="danger" onClick={this.handleClick} value="November"> November</Button >
        < Button color="danger" onClick={this.handleClick} value="December"> December</Button >
        {currentlyVisibleMonth}
      </React.Fragment >
    );
  }
}

export default BaseControl;