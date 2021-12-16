import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import TextInput from './TextInput';
import { STYLE_ADD, STYLE_EDIT } from './consts';
import TextArea from './TextArea';

const TextInputWithAction = ({
  textarea,
  name,
  label,
  inputRef,
  handleAction,
  onCancel,
  editedSectionName
}) => {

  const sectionIsEdited = editedSectionName === name;
  const isDisabled = editedSectionName !== null && !sectionIsEdited;

  const handleSubmit = (e) => {
    e?.preventDefault(); //prevent page refresh
    handleAction(name, inputRef.current.value);
    inputRef.current.value = '';
    inputRef.current.blur();
  };

  const handleCancel = (e) => {
    e?.preventDefault(); //prevent page refresh
    onCancel();
    inputRef.current.value = '';
    inputRef.current.blur();
  };

  return (
    <div className={sectionIsEdited ? STYLE_EDIT : STYLE_ADD}>
      {textarea ?
        <TextArea
          label={label}
          name={name}
          inputRef={inputRef}
          submitHandler={handleSubmit}
          isDisabled={isDisabled}
        />
        :
        <TextInput
          label={label}
          name={name}
          inputRef={inputRef}
          submitHandler={handleSubmit}
          isDisabled={isDisabled}
        />}
      <Button
        label={sectionIsEdited ? 'Save' : 'Add'}
        handleClick={handleSubmit}
        isDisabled={isDisabled}
      />
      {sectionIsEdited && <Button label="Cancel" handleClick={handleCancel}/>}
    </div>
  );
};

TextInputWithAction.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  inputRef: PropTypes.object.isRequired,
  handleAction: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  editedSectionName: PropTypes.string.isRequired
};

export default TextInputWithAction;
