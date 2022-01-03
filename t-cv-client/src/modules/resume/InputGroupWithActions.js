import React, { useState,useEffect } from 'react';
import TextInput from './TextInput';
import { generateId, getKeys, INPUT_DEFINITIONS } from './consts';
import Button from '../../components/Button';
import TextInputWithAction from './TextInputWithAction';

const InputGroupWithActions = ({
  name,
  editedSectionName,
  bulletsArr,
  onCancel,
  handleAction
}) => {

  const [bullets, setBullets] = useState([]);
  useEffect(() => {
      setBullets(bulletsArr);
  },[bulletsArr])

  const groupIsEdited = editedSectionName === name;
  const { fieldsetLabel, inputs } = INPUT_DEFINITIONS[name];
  const { ref: bulletsRef } = inputs.bulletPoints;

  const addBulletPoint = (name, value) => {
    const bullet = {
      item: {
        id: generateId(),
        value: value
      },
      isSelected: false
    };
    setBullets(prev => prev.concat(bullet));
  };

  const handleEditBullet = (e, id, value) => {
//todo
    /*1. prevent default
    * 2. save what entry is changing
    * */
    e.preventDefault();
    bulletsRef.current.value = value;
    // setBullets(prev => prev.filter(el => el.item.id !== id));
    // bulletsRef.current.focus();
    // ;
    //
    // // const editedBullet = bullets.find()
    // console.log(bulletsRef, id, value);
    // //set value into textInput
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const currentValues = {};
    const keys = getKeys(inputs);
    keys.forEach(key => {
      if (key === 'bulletPoints') {
        currentValues[key] = [...bullets];
        setBullets([]);
      } else {
        currentValues[key] = inputs[key].ref.current.value;
        inputs[key].ref.current.value = '';
        inputs[key].ref.current.blur();
      }
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
                {bullets?.length > 0 && (
                  <ul>
                    {bullets.map(bullet => {
                      const { id, value } = bullet.item;
                      return (
                        <li key={id}>
                          <p>{value}</p>
                          <div className="btn-row">
                            <span
                              className="edit-btn"
                              onClick={(e) => handleEditBullet(e, id, value)}
                            >
                              &#9998;
                            </span>
                            <span className="remove-btn">&#10539;</span>
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