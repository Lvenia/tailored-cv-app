import React from 'react';
import { ENTER } from "./consts";
import PropTypes from 'prop-types';

const TextInput = ({
  name,
  type,
  label,
  inputRef,
  handleInputSubmit,
}) => {

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        ref={inputRef}
        onKeyDown={e => e.key === ENTER && handleInputSubmit(e)}
      />
    </>
  )
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  inputRef: PropTypes.object.isRequired,
  handleInputSubmit: PropTypes.func.isRequired
}

export default TextInput;
