import React from 'react';
import PropTypes from 'prop-types';
import { ENTER } from './consts';

const TextInput = ({
  name,
  label,
  inputRef,
  submitHandler,
  isDisabled
}) => {

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type="text"
        ref={inputRef}
        onKeyDown={e => e.key === ENTER && submitHandler(e)}
        disabled={isDisabled}
        autoComplete='off'
      />
    </>
  )
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  inputRef: PropTypes.object.isRequired,
  submitHandler: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool
}

export default TextInput;
