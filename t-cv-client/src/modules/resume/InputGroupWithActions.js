import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import TextInput from './TextInput';
import TextInputWithAction from './TextInputWithAction';
import Button from '../../components/Button';
import { generateId } from '../utils';
import { INPUT_DEFINITIONS } from './consts';

const InputGroupWithActions = ({
  name,
  editedSectionName,
  bulletsArr,
  onCancel,
  handleAction
}) => {
  const [bullets, setBullets] = useState([]);

  useEffect(() => {
    if (bulletsArr) {
      setBullets(bulletsArr);
    }
  }, [bulletsArr]);

  const groupIsEdited = editedSectionName === name;
  const { fieldsetLabel, inputs } = INPUT_DEFINITIONS[name];
  const { ref: bulletsRef } = inputs.bulletPoints;
  const keys = Object.keys(inputs);

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

  const removeBulletPoint = (id) => {
    const reducedList = bullets.filter(bullet => bullet.item.id !== id);
    setBullets(reducedList);
  };

  const handleEditBullet = (e, id, value) => {
    e.preventDefault();
    //set inputs value with the bullets content
    bulletsRef.current.value = value;
    //remove bullet form local state
    removeBulletPoint(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentValues = {};
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
    //set state.edited with {sectionName: null, entry: null}
    onCancel();
    //set all inputs with value of empty string
    keys.forEach(key => {
      inputs[key].ref.current.value = '';
    });
    //remove bullets list if bullets array is not empty
    setBullets([]);
  };

  const renderBullets = () => {
    if (bullets?.length > 0) {
      return (
        <div className="bullets">
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
                    <span
                      className="remove-btn"
                      onClick={() => removeBulletPoint(id)}
                    >
                      &#10539;
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  };

  const renderInputGroup = (sectionName) => {
    return keys.map(key => {
      let { label, name, ref } = INPUT_DEFINITIONS[sectionName].inputs[key];
      if (key === 'bulletPoints') {
        return (
          <div className="add-bullets" key={key}>
              <TextInputWithAction
                textarea={true}
                name={name}
                label={label}
                inputRef={ref}
                handleAction={addBulletPoint}
                editedSectionName={editedSectionName}
                sectionName={sectionName}
              />
            {renderBullets()}
          </div>
        );
      } else {
        return (
          <TextInput
            key={key}
            inputRef={ref}
            label={label}
            name={name}
            submitHandler={handleSubmit}
          />
        );
      }
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

InputGroupWithActions.propTypes = {
  name: PropTypes.string.isRequired,
  editedSectionName: PropTypes.string,
  bulletsArr: PropTypes.array,
  onCancel: PropTypes.func.isRequired,
  handleAction: PropTypes.func.isRequired
};

export default InputGroupWithActions;

//TODO [] fix bullet list position
