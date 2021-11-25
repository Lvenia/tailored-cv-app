import React, { useRef, useContext, useState } from 'react';
import { AppContext } from "../../App";
import TextInputWithAction from "./TextInputWithAction";
import {
  ADD_ENTRY,
  DELETE_ENTRY,
  EDIT_ENTRY,
  SELECT_ENTRY,
  UNSELECT_ENTRY,
  HEADER_INPUTS,
  NAME_ENTRY_CONTROL,
  ROLE_ENTRY_CONTROL,
  generateId
} from './consts';
import Button from "../../components/Button";

const HeaderPage = () => {
  const { state, dispatch } = useContext(AppContext);
  const nameRef = useRef("");
  const roleRef = useRef("");


  const addEntry = (name, value) => {
    dispatch({ type: ADD_ENTRY, payload: { id: generateId(), name, value }})
  };

  const editEntry = (id, name) => {
    dispatch({type: EDIT_ENTRY, payload: {id, name}});
  };

  const deleteEntry = (id, name) => {
    dispatch({type: DELETE_ENTRY, payload: {id, name}});
  };

  const toggleSelect = (id, name, shouldBeSelected) => {
    if (shouldBeSelected) {
      dispatch({type: UNSELECT_ENTRY, payload: {id, name}});
    } else {
      dispatch({type: SELECT_ENTRY, payload: {id, name}});
    }
  }

  const renderEntries = (entry, entryName) => {
    const { history, selected } = entry;
    return history.map(item => {
      const { id, value } = item;
      const shouldBeSelected = selected.includes(id);
      return (
        <div key={id} className="entry">
          <Button
            handleClick={() => toggleSelect(id, entryName, shouldBeSelected)}
            label="S"
            style={selected.includes(id) && "selected-btn"}
          />
          <Button handleClick={() => editEntry(id, entryName)} label="E" />
          <Button handleClick={() => deleteEntry(id, entryName)} label="D"/>
          <p key={id}>{value}</p>
        </div>
      )
    })
  }

   const { name: nameEntry, role: roleEntry } = state;
   return (
     <>
       <article>
         <fieldset>
           <legend>{ HEADER_INPUTS }</legend>
           <TextInputWithAction
             name="name"
             type="text"
             label="Name:"
             inputRef={nameRef}
             action={addEntry}
           />
           <TextInputWithAction
             name="role"
             type="text"
             label="Role:"
             inputRef={roleRef}
             action={addEntry}
           />
         </fieldset>
       </article>
       <article className="entry-control-box">
         <h5>{ NAME_ENTRY_CONTROL }</h5>
         {renderEntries(nameEntry, "name")}
       </article>
       <article className="entry-control-box">
         <h5>{ ROLE_ENTRY_CONTROL }</h5>
         {renderEntries(roleEntry, "role")}
       </article>
     </>
   )
}

export default HeaderPage;
