import React from "react";
import PropTypes from "prop-types";
import Produce from "./Produce";
import Home from "./Home";


function Month(props) {
  return (
    <React.Fragment>

      <h2>{props.month}</h2>
      <h3>Produce Available in this Month </h3>
      {props.selection.map((value, index) => {
        return <p className="produce" key={index}>{value}</p>
      })}
    </React.Fragment>
  );
};

Month.propTypes = {
  month: PropTypes.string.isRequired,
  produce: PropTypes.array.isRequired,
};

export default Month;