import React from 'react';
import PropTypes from 'prop-types';

import { ENTER } from './consts';

const TextArea = ({
  name,
  label,
  inputRef,
  submitHandler,
  isDisabled
}) => {
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
