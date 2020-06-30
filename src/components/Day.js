import React from "react";
import PropTypes from "prop-types";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import Home from "./Home";


function Day(props) {
  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <CardTitle>{props.day} - {props.location}</CardTitle>
          <CardSubtitle>Time of day: {props.hours}</CardSubtitle>
          <CardText>Booth: {props.booth}</CardText>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

Day.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
};

export default Day;