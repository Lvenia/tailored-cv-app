import React from 'react';
import { ENTER, SIMPLE_INPUT_DEFS } from './consts';
import PropTypes from 'prop-types';

const TextArea = ({
  name,
  label,
  // inputRef,
  submitHandler,
  isDisabled
}) => {
  const inputRef  = SIMPLE_INPUT_DEFS[name]?.ref;
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <textarea
        id={name}
        ref={inputRef}
        onKeyDown={e => e.key === ENTER && submitHandler(e)}
        disabled={isDisabled}
        autoComplete='off'
      >
      </textarea>
    </>
  );
};

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  inputRef: PropTypes.object.isRequired,
  submitHandler: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
}

export default TextArea;
