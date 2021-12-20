import React from 'react';
import PropTypes from 'prop-types';

const Button = ({label, handleClick, cssSelector, isDisabled, title}) => {
  return (
    <button
      className={cssSelector}
      onClick={handleClick}
      disabled={isDisabled}
      title={title}
    >
      {label}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  cssSelector: PropTypes.string,
  isDisabled: PropTypes.bool,
  title: PropTypes.string
}

export default Button;
