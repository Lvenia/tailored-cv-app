import React from 'react';
import PropTypes from 'prop-types';
import Button from "../../components/Button";
import TextInput from "./TextInput";

const TextInputWithAction = ({
  inputRef,
  action,
  ...rest
}) => {

  const handleAdd = (e) => {
    e?.preventDefault(); //prevent page refresh
    action(rest.name, inputRef.current.value);
    inputRef.current.value="";
    inputRef.current.blur();
  };

  return (
    <div className="add">
      <TextInput
        {...rest}
        inputRef={inputRef}
        handleInputSubmit={handleAdd}
      />
      {action && <Button label="Add" handleClick={handleAdd}/>}
    </div>
  )
}

// TODO: add all
TextInputWithAction.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  inputRef: PropTypes.object.isRequired,
  action: PropTypes.func.isRequired,
}

export default TextInputWithAction;
