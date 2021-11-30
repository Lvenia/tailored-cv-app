import React from 'react';
import { ENTER } from "./consts";
import PropTypes from 'prop-types';

const TextInput = ({
  name,
  type,
  label,
  inputRef,
  handler,
}) => {

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        ref={inputRef}
        onKeyDown={e => e.key === ENTER && handler(e)}
      />
    </>
  )
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  inputRef: PropTypes.object.isRequired,
  handler: PropTypes.func.isRequired
}

export default TextInput;
