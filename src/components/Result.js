import React from "react";
import PropTypes from "prop-types";

const Result = ({ value }) => {

  return (
    <div className="result">
      {value}
    </div>
  );
}

Result.propTypes = {
  value: PropTypes.number.isRequired
}

Result.defaultProps = {
  value: 10
}

export default Result;