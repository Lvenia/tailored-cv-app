import React from 'react';
import TextInput from './TextInput';
import { getKeys, INPUT_DEFINITIONS } from './consts';
import Button from '../../components/Button';

const InputGroupWithActions = ({
  name,
  editedSectionName,
  onCancel,
  handleAction
}) => {

  const groupIsEdited = editedSectionName === name;
  const { fieldsetLabel, inputs } = INPUT_DEFINITIONS[name];

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentValues = {};
    const keys = getKeys(inputs);
    keys.forEach(key => {
      currentValues[key] = inputs[key].ref.current.value;
      inputs[key].ref.current.value = '';
      inputs[key].ref.current.blur();
    });
    handleAction(name, currentValues);
  };

  const handleCancel = (e) => {
    e?.preventDefault();
    onCancel();
    const { inputs } = INPUT_DEFINITIONS[name];
    const keys = getKeys(inputs);
    keys.forEach(key => {
      inputs[key].ref.current.value = '';
    });
  };

  const renderInputGroup = (sectionName) => {
    const keys = getKeys(INPUT_DEFINITIONS[sectionName].inputs);
    return keys.map(key => {
      let { ref } = INPUT_DEFINITIONS[sectionName].inputs[key];
      let { label } = INPUT_DEFINITIONS[sectionName].inputs[key];
      let { name } = INPUT_DEFINITIONS[sectionName].inputs[key];
      return (
        <TextInput
          key={name}
          inputRef={ref}
          label={label}
          name={name}
          submitHandler={handleSubmit}
        />
      );
    });
  };

  return (
    <fieldset>
      <legend>{fieldsetLabel}</legend>
      <div className="group-input">
        {renderInputGroup(name)}
      </div>
      <div className="btn-row">
        <Button handleClick={handleSubmit} label={groupIsEdited ? 'Save' : 'Add'}/>
        {groupIsEdited && <Button handleClick={handleCancel} label={'Cancel'}/>}
      </div>
    </fieldset>
  );
};


export default InputGroupWithActions;

//TODO [] add proptypes, name is required
//TODO [] change datatype for date email and so on
//TODO Q should I pass components prop as an argument into handler?