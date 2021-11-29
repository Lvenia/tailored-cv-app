import React, { useState } from 'react';
import Button from "../../components/Button";


const ItemWithActions = ({
  sectionName,
  entry,
  handleToggleSelect,
}) => {
  const { item, isSelected } = entry;
  const { id } = item;
  // console.log(inputRef.current)

  return (
    <div className="entry">
      {/* TODO: ONLY render buttons if correspondent handler is provided */}
      {handleToggleSelect && <Button
        style={isSelected ? 'selected-btn' : ''}
        label="S"
        handleClick={() => handleToggleSelect(sectionName, id)}
      />}

      <Button
        label="E"
        handleClick={() => {
        }}
        // handleClick={() => {
        //   if(entryName === NAME) {
        //     setEditName(true)
        //   }
        //   if(entryName === ROLE) {
        //     setEditRole(true)
        //   }
        //   updateRefValue(inputRef, value);
        //   inputRef.current.focus();
        //
        //   //dispatch newValue instead of old one
        //   // editEntry(dispatch, id, entryName, value);
        // }}
      />
      <Button
        label="D"
        handleClick={() => {
        }}
        // handleClick={() => {
        //   if(entryName === NAME) {
        //     setEditName(true)
        //   }
        //   if(entryName === ROLE) {
        //     setEditRole(true)
        //   }
        //   updateRefValue(inputRef, value);
        //   inputRef.current.focus();
        //
        //   //dispatch newValue instead of old one
        //   // editEntry(dispatch, id, entryName, value);
        // }}
      />
      <p>{item.value}</p>
    </div>
  )
};

export default ItemWithActions;