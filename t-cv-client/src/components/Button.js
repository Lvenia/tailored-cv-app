import React from 'react';

const Button = ({label, handleClick}) => {
  return (
    <button
      onClick={(e) => handleClick(e)}
    >
      {label}
    </button>
  )
}

export default Button;