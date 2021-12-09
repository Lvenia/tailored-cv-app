import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from "../../components/Button";
import TextInput from "./TextInput";
import { STYLE_ADD, STYLE_EDIT } from "./consts";
/*
*   name={NAME}
          label='Name:'
          inputRef={nameRef}
          handleAdd={() => addEntry(dispatch)}
          handleSave={() => saveChanges(dispatch)}
          // handleAction={editedSectionName === NAME ? saveChanges(dispatch) : addEntry(dispatch)}
          onCancel={() => dropChanges(dispatch)}
          isEdited={editedSectionName === NAME}
          disabled={editedSectionName === ROLE}*/
const TextInputWithAction = ({
  name,
  label,
  inputRef,
  // handleAdd,
  // handleSave,
  handleAction,
  onCancel,
  editedSection
  // isEdited,
  // disabled
}) => {

  // useEffect(() => {
  //   editedSection.entry && inputRef.current.focus();
  // }, [editedSection.entry]);

  const isEdited = editedSection.sectionName === name;

  const handleSubmit = (e) => {
    e?.preventDefault(); //prevent page refresh
    // isEdited ? handleSave(name, inputRef.current.value) : handleAdd(name, inputRef.current.value)
    handleAction(name, inputRef.current.value);
    inputRef.current.value = "";
    inputRef.current.blur();
  };

  const handleCancel = (e) => {
    e?.preventDefault(); //prevent page refresh
    onCancel();
    inputRef.current.value = "";
    inputRef.current.blur();
  };

  return (
    <div className={isEdited ? STYLE_EDIT : STYLE_ADD}>
      <TextInput
        label={label}
        name={name}
        inputRef={inputRef}
        handler={handleSubmit}
        // disabled={disabled}
      />
      <Button
        label={isEdited ? 'Save' : 'Add'}
        handleClick={handleSubmit}
        // disabled={disabled}
      />
      {isEdited && <Button label='Cancel' handleClick={handleCancel}/>}
    </div>
  )
}

// TODO: add all
TextInputWithAction.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default TextInputWithAction;
