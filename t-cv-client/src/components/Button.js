import React from 'react';
import PropTypes from 'prop-types';

const Button = ({label, handleClick, cssSelector, isDisabled}) => {
  return (
    <button
      className={cssSelector}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {label}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  cssSelector: PropTypes.string,
  isDisabled: PropTypes.bool
}

export default Button;
