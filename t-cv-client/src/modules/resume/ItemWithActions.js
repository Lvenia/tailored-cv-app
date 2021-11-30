import React from 'react';
import Button from "../../components/Button";
import {
  STYLE_HIDDEN,
  STYLE_ENTRY,
  STYLE_SLC_BTN
} from "./consts";

const ItemWithActions = ({
  sectionName,
  entry,
  handleToggleSelect,
  handleEdit,
  handleDelete,
  hide
}) => {
  const { item, isSelected } = entry;
  const { id } = item;

  return (
    <div className={STYLE_ENTRY}>
      {/* TODO: ONLY render buttons if correspondent handler is provided */}
      {handleToggleSelect && <Button
        style={isSelected ? STYLE_SLC_BTN : ''}
        label="S"
        handleClick={() => handleToggleSelect(sectionName, id)}
      />}
      {handleEdit && <Button
        label="E"
        handleClick={() => {
          hide(STYLE_HIDDEN)
          handleEdit(sectionName, entry);
        }}
      />}
      {handleDelete && <Button
        label="D"
        handleClick={() => {handleDelete(sectionName, id)}}
      />}
      <p>{item.value}</p>
    </div>
  )
};

export default ItemWithActions;
