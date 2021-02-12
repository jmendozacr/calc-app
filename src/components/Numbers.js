import React from "react";
import Button from "./Button/Button";
import PropTypes from "prop-types";
import "./Button/Button.css"

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const renderButtons = onClickNumber => {
  return numbers.map((number) => {
    return <Button text={`${number}`} key={number} clickHandler={onClickNumber}/>
  })
};

const Numbers = ({ onClickNumber }) => (
  <section className="numbers">
    {
      renderButtons(onClickNumber)
    }

  </section>
);

Numbers.prototype = {
  onClickNumber: PropTypes.func.isRequired
};
 
export default Numbers;