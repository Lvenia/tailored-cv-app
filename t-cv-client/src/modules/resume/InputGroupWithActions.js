import React from 'react';
import TextInput from './TextInput';
import { generateId, getKeys, INPUT_DEFINITIONS } from './consts';
import Button from '../../components/Button';

/*// TODO:InputGroupWithActions
* [] handle actions
* [] refs should be available after useHandleRefs is called in parent, verify that
* */


const InputGroupWithActions = ({
  name,
  editedSectionName,
  onCancel
}) => {

  const groupIsEdited = editedSectionName === name;
  const { fieldsetLabel } = INPUT_DEFINITIONS[name];

  const handleSubmit = (e) => { //todo
    console.log('define submit on ENTER and submit button');
  };

  const handleCancel = (e, sectionName) => {
    e?.preventDefault();
    onCancel();
    const { inputs } = INPUT_DEFINITIONS[sectionName];
    const keys = getKeys(inputs);
    keys.forEach(key => {
      inputs[key].ref.current.value = "";
    })
  };

  const renderInputGroup = (sectionName) => {
    const keys = getKeys(INPUT_DEFINITIONS[sectionName].inputs);
    return keys.map(key => {
      let { ref } = INPUT_DEFINITIONS[sectionName].inputs[key];
      let { label } = INPUT_DEFINITIONS[sectionName].inputs[key];
      let { name } = INPUT_DEFINITIONS[sectionName].inputs[key];
      return (
        <TextInput key={name} inputRef={ref} label={label} name={name}/>
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
        {groupIsEdited && <Button handleClick={(e) => handleCancel(e, name)} label={'Cancel'}/>}
      </div>
    </fieldset>
  );
};

export default InputGroupWithActions;
