import React from 'react';
import PropTypes from 'prop-types';
import Button from "../../components/Button";
import TextInput from "./TextInput";

const TextInputWithAction = ({
  name,
  inputRef,
  addEntry,
  // editEntry,
  // editMode,
  ...rest
}) => {

  // const label = editMode ? "Save" : "Add";

  const handleAdd = (e) => {
    e?.preventDefault(); //prevent page refresh
    addEntry(name, inputRef.current.value);
    inputRef.current.value="";
    inputRef.current.blur();
  };

  // const handleEdit = (e) => {
  //   e?.preventDefault(); //prevent page refresh
  //   editEntry(dispatch, rest.id, rest.name, inputRef.current.value)//dispatch, id, name, value
  //   inputRef.current.value="";
  //   inputRef.current.blur();
  // }


  return (
    <div className="add">
      <TextInput
        {...rest}
        inputRef={inputRef}
        handleInputSubmit={handleAdd}
      />
      {<Button label="Add" handleClick={handleAdd}/>}
    </div>
  )
}

// TODO: add all
TextInputWithAction.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  inputRef: PropTypes.object.isRequired,
  // action: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default TextInputWithAction;
