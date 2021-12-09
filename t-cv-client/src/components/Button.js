import React from 'react';
import PropTypes from 'prop-types';

const Button = ({label, handleClick, style, disabled}) => {
  return (
    <button
      className={style}
      onClick={handleClick}
      disabled={disabled}
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
