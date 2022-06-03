import React from "react";
import PropTypes from "prop-types";
import "./Display.scss";

const Display = (props) => {
  return (
    <div className="display">
      <div className="prev">{props.prev}</div>
      <div className="show">{props.show}</div>
    </div>
  );
};

Display.propTypes = {
  show: PropTypes.string,
};

export default Display;
