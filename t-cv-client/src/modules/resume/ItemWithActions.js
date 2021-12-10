import React from 'react';
import PropTypes from 'prop-types';
import Button from "../../components/Button";
import {
  STYLE_ENTRY,
  STYLE_SLC_BTN
} from "./consts";

const ItemWithActions = ({
  name,
  entry,
  handleToggleSelect,
  handleEdit,
  handleDelete,
  disabled,
}) => {
  const { item, isSelected } = entry;
  const { id } = item;

  return (
    <div className={STYLE_ENTRY}>
      {handleToggleSelect && <Button
        label="S"
        handleClick={() => handleToggleSelect(name, id)}
        cssSelector={isSelected ? STYLE_SLC_BTN : ''}
        isDisabled={disabled}
      />}
      {handleEdit && <Button
        label="E"
        handleClick={() => handleEdit(name, entry)}
        isDisabled={disabled}
      />}
      {handleDelete && <Button
        label="D"
        handleClick={() => {handleDelete(name, id)}}
        isDisabled={disabled}
      />}
      <p>{item.value}</p>
    </div>
  )
};

ItemWithActions.propTypes = {
  name: PropTypes.string.isRequired,
  entry: PropTypes.object.isRequired,
  handleToggleSelect: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  disabled: PropTypes.bool
}

export default ItemWithActions;
