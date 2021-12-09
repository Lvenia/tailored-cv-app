import React from 'react';
import { ENTER } from "./consts";
import PropTypes from 'prop-types';

const TextInput = ({
  name,
  label,
  inputRef,
  handler,
  disabled
}) => {

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type="text"
        ref={inputRef}
        onKeyDown={e => e.key === ENTER && handler(e)}
        disabled={disabled}
      />
    </>
  )
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  inputRef: PropTypes.object.isRequired,
  handler: PropTypes.func.isRequired
}

export default TextInput;
