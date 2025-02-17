import React from 'react';
import PropTypes from 'prop-types';
import './Square.css'

const Square = (props) => {

  // ✅ Wave 1: The `Square` component should display the value passed into it
  // ✅ Wave 1: The `Square` component should also hold an id
  // ✅ Wave 2: The PropTypes of `Square` state that there is a required prop named `onClickCallback`
  // ❗️ I don't understand how the following is working to call back a parent component when the square component gets clicked 
  return (
    <button className="square" onClick={() => props.onClickCallback(props.id)}>
      {props.value}
    </button>
  )
}

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square;
