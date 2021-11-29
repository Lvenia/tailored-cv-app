import React, { useState } from 'react';
import Button from "../../components/Button";


const ItemWithActions = ({
  sectionName,
  entry,
  handleToggleSelect,
}) => {
  const {item, selected} = entry;
  // console.log(inputRef.current)

  return (
    <div className="entry">
      {/* TODO: ONLY render buttons if correspondent handler is provided */}
      <Button
        // style={isSelected ? 'selected-btn' : ''}
        label="S"
        // handleClick={() => {
        //   toggleSelect(dispatch, id, entryName, isSelected)
        // }}
        // handleClick={() => {
        //   setSelected(!isSelected);
        //   handleToggleSelect({ item, shouldBeSelected: isSelected, sectionNameentryName });
        // }}
      />

      <Button
        label="E"
        handleClick={() => {}}
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
        handleClick={() => {}}
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