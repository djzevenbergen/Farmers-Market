import React from "react";
import PropTypes from "prop-types";


function Day(props) {
  return (
    <React.Fragment>
      <h3>{props.day} - {props.location}</h3>
      <p>{props.hours} - {props.booth}</p>
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