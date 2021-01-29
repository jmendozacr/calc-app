import React from "react";
import PropTypes from "prop-types";

const Result = ({ value }) => (
  <div className="result">
    {value}
  </div>
);

Result.propTypes = {
  value: PropTypes.number.isRequired
}

Result.defaultProps = {
  value: 0
}

export default Result;