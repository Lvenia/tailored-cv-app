import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from "../../components/Button";
import TextInput from "./TextInput";
import { STYLE_ADD, STYLE_EDIT } from "./consts";

const TextInputWithAction = ({
  name,
  label,
  inputRef,
  handleAction,
  onCancel,
  editedSection
}) => {

  // useEffect(() => {
  //   editedSection.entry && inputRef.current.focus();
  // }, [editedSection.entry]);

  const sectionIsEdited = editedSection.sectionName === name;
  const isDisabled = editedSection.sectionName !== null && !sectionIsEdited;

  const handleSubmit = (e) => {
    e?.preventDefault(); //prevent page refresh
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
    <div className={sectionIsEdited ? STYLE_EDIT : STYLE_ADD}>
      <TextInput
        label={label}
        name={name}
        inputRef={inputRef}
        submitHandler={handleSubmit}
        isDisabled={isDisabled}
      />
      <Button
        label={sectionIsEdited ? 'Save' : 'Add'}
        handleClick={handleSubmit}
        isDisabled={isDisabled}
      />
      {sectionIsEdited && <Button label='Cancel' handleClick={handleCancel}/>}
    </div>
  )
}

// TODO: add all
TextInputWithAction.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  inputRef: PropTypes.object.isRequired,
  handleAction: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  editedSection: PropTypes.object.isRequired
}

export default TextInputWithAction;
