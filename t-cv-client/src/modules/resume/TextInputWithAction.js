import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import TextInput from './TextInput';
import { SIMPLE_INPUT_DEFS, STYLE_ADD, STYLE_EDIT } from './consts';
import TextArea from './TextArea';

const TextInputWithAction = ({
  textarea,
  name,
  label,
  // inputRef,
  handleAction,
  onCancel,
  editedSectionName,
  sectionName //passed only if name is equal to input sub name like "edu_bullets"
}) => {

  const sectionIsEdited = editedSectionName === sectionName || editedSectionName === name; //case for input sub name like "edu_bullets" || case fot input name like "education"
  const isDisabled = editedSectionName !== null && !sectionIsEdited;
  const inputRef  = SIMPLE_INPUT_DEFS[name]?.ref;

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
          // inputRef={inputRef}
          submitHandler={handleSubmit}
          isDisabled={isDisabled}
        />
        :
        <TextInput
          label={label}
          name={name}
          // inputRef={inputRef}
          submitHandler={handleSubmit}
          isDisabled={isDisabled}
        />}
      <Button
        label={sectionIsEdited && !sectionName ? 'Save' : 'Add'}
        handleClick={handleSubmit}
        isDisabled={isDisabled}
      />
      {sectionIsEdited && !sectionName && <Button label="Cancel" handleClick={handleCancel}/>}
    </div>
  );
};

TextInputWithAction.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  inputRef: PropTypes.object.isRequired,
  handleAction: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  editedSectionName: PropTypes.string,
  sectionName: PropTypes.string,
  textarea: PropTypes.bool
};

export default TextInputWithAction;
