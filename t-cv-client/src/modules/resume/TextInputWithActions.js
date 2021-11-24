import React from 'react';
import PropTypes from 'prop-types';
import Button from "../../components/Button";
import TextInput from "./TextInput";

const TextInputWithActions = ({
  addEntry,
  ...restProps
}) => {

  const handleAdd = (e) => {
    e?.preventDefault(); //prevent page refresh
    addEntry(restProps.name, restProps.inputRef.current.value);
    restProps.inputRef.current.value="";
    restProps.inputRef.current.blur();
  };

  return (
    <div className="add">
      <TextInput
        {...restProps}
        inputRef={restProps.inputRef}
        handleInputSubmit={handleAdd}
      />
      {handleAdd && <Button label="Add" handleClick={handleAdd}/>}
    </div>
  )
}

// TODO: add all
TextInputWithActions.propTypes = {
  name: PropTypes.string.isRequired,
}

export default TextInputWithActions;
