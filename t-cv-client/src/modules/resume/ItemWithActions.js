import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import {
  STYLE_BULLET_ENTRY,
  STYLE_ENTRY,
  STYLE_SLC_BTN
} from './consts';

const ItemWithActions = ({
  name,
  entry,// section entry or single bullet
  handleToggleSelect,
  handleEdit,
  handleDelete,
  disabled,
}) => {
  const { item, isSelected } = entry;
  const { id } = item;

  return (
    <div className={typeof item.value === 'object' ? STYLE_ENTRY : STYLE_BULLET_ENTRY}>
      {handleToggleSelect && <Button
        title="Select"
        label="S"
        handleClick={() => handleToggleSelect(name, id)}
        cssSelector={isSelected ? STYLE_SLC_BTN : ''}
        isDisabled={disabled}
      />}
      {handleEdit && <Button
        title="Edit"
        label="E"
        handleClick={() => handleEdit(name, entry)}
        isDisabled={disabled}
      />}
      {handleDelete && <Button
        title="Delete"
        label="D"
        handleClick={() => {handleDelete(name, id)}}
        isDisabled={disabled}
      />}
      <p>{item.value}</p>
    </div>
  );
};

ItemWithActions.propTypes = {
  name: PropTypes.string.isRequired,
  entry: PropTypes.object.isRequired,
  handleToggleSelect: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

export default ItemWithActions;
