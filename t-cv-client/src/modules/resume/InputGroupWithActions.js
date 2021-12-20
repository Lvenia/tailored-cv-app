import React from 'react';
import TextInput from './TextInput';
import { INPUT_DEFINITIONS } from './consts';
import Button from '../../components/Button';

/*// TODO:InputGroupWithActions
* [] handle actions
* [] refs should be available after useHandleRefs is called in parent, verify that
* */


const InputGroupWithActions = ({
  name, //"education", sectionName
  inputRef,
}) => {
  const groupIsEdited = false; //temporary value

  const groupInputDefinitions = INPUT_DEFINITIONS[name];

  const handleSubmit = (e) => {
    console.log('define submit on ENTER and submit button');
  };
  const handleCancel = (e) => {
    console.log('define drop changes');
  };

  const getInputKeys = (sectionName) => {
    const keys = [];
    for (let input in INPUT_DEFINITIONS[sectionName].inputs) {
      keys.push(input);
    }
    return keys;
  };

  const inputKeys = getInputKeys('education');

  return (
    <fieldset>
      <legend>{groupInputDefinitions.fieldsetLabel}</legend>
      <div className="group-input">
        {inputKeys.map(key => {
          const educationInputs = INPUT_DEFINITIONS.education.inputs;
          return (
            <TextInput
              name={educationInputs[key].name}
              inputRef={educationInputs[key].inputRef}
              label={educationInputs[key].label}
            />
          );
        })}
      </div>
      <div>
        <Button handleClick={handleSubmit} label={groupIsEdited ? 'Save' : 'Add'}/>
        {groupIsEdited && <Button handleClick={handleCancel} label={'Cancel'}/>}
      </div>
    </fieldset>
  );
};

export default InputGroupWithActions;
