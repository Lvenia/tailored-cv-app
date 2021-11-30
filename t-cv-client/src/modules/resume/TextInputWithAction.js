import React from 'react';
import PropTypes from 'prop-types';
import Button from "../../components/Button";
import TextInput from "./TextInput";

const TextInputWithAction = ({
  name,
  inputRef,
  handleAction,
  onCancel,
  edit,
  cssClass,
  hide,
  ...rest
}) => {
  const handleSubmit = (e) => {
    e?.preventDefault(); //prevent page refresh
    handleAction(name, inputRef.current.value);
    inputRef.current.value="";
    inputRef.current.blur();
    hide("");
  };

  const handleCancel = (e) => {
    e?.preventDefault(); //prevent page refresh
    onCancel();
    inputRef.current.value="";
    inputRef.current.blur();
    hide("");
  };

  const label = edit ? "Save" : "Add";

  return (
    <div className={cssClass}>
      <TextInput
        {...rest}
        name={name}
        inputRef={inputRef}
        handler={handleSubmit}
        edit
      />
      {handleAction && <Button label={label} handleClick={handleSubmit}/>}
      {edit && <Button label="Drop" handleClick={handleCancel}/>}
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
