import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Button = ({label, handleClick, style}) => {
  const [toggle, setToggle] = useState();
  return (
    <button
      className={style}
      onClick={handleClick}
    >
      {label}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
}

export default Button;
