import React, { useState } from 'react';
import TextInput from './TextInput';
import { generateId, getKeys, INPUT_DEFINITIONS } from './consts';
import Button from '../../components/Button';
import TextInputWithAction from './TextInputWithAction';
import { addEntry } from './actionHandlers';

const InputGroupWithActions = ({
  name,
  editedSectionName,
  onCancel,
  handleAction
}) => {
  const [bullets, setBullets] = useState([]);
  console.log(bullets);

  const groupIsEdited = editedSectionName === name;
  const { fieldsetLabel, inputs } = INPUT_DEFINITIONS[name];
  const { bulletPoints } = inputs;

  const addBulletPoint = (name, value) => {
    const item = {
      id: generateId(),
      value: value
    };
    setBullets(prev => prev.concat(item));
  };

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
        if (key !== 'bulletPoints') {
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
        }

        if (key === 'bulletPoints') {
          const { label, name, ref } = INPUT_DEFINITIONS[sectionName].inputs.bulletPoints;
          return (
            <>
              <div className="add-bullets">
                <TextInputWithAction
                  textarea={true}
                  name={name}
                  label={label}
                  inputRef={ref}
                  handleAction={addBulletPoint}
                  // onCancel={handleCancel}
                  editedSectionName={editedSectionName}
                />
              </div>
              <div className="bullets">
                {bullets.length > 0 && (
                  <ul>
                    {bullets.map(bullet => {
                      return (
                        <li key={bullet.id}>
                          <p>{bullet.value}</p>
                          <div className="btn-row">
                            <button>+</button>
                            <button>E</button>
                            <button>-</button>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </>
          );
        }
      }
    );
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