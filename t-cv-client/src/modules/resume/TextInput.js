import React from 'react';
import { ENTER } from "./consts";

const TextInput = ({
  name,
  type,
  label,
  inputRef,
  handleInputSubmit
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

export default TextInput;