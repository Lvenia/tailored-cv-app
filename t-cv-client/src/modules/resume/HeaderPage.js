import React, { useRef, useContext } from 'react';
import { AppContext } from "../../App";
import TextInputWithAction from "./TextInputWithAction";
import Button from "../../components/Button";

import {
  addEntry,
  editEntry,
  deleteEntry,
  toggleSelect
} from "./actionHandlers";

import {
  HEADER_INPUTS,
  NAME_ENTRY_CONTROL,
  ROLE_ENTRY_CONTROL,
  NAME,
  ROLE
} from './consts';

const HeaderPage = () => {
  const { state, dispatch } = useContext(AppContext);
  const nameRef = useRef("");
  const roleRef = useRef("");

  const renderEntries = (entry, entryName) => {
    const { history, selected } = entry;
    return history.map(item => {
      const { id, value } = item;
      const shouldBeSelected = selected.includes(id);
      return (
        <div key={id} className="entry">
          <Button
            handleClick={() => toggleSelect(dispatch, id, entryName, shouldBeSelected)}
            label="S"
            style={selected.includes(id) ? "selected-btn" : ""}
          />
          <Button handleClick={() => editEntry(dispatch, id, entryName)} label="E" />
          <Button handleClick={() => deleteEntry(dispatch,id, entryName)} label="D"/>
          <p key={id}>{value}</p>
        </div>
      )
    })
  }

   const { name: nameArr, role: roleArr} = state;
   return (
     <>
       <article>
         <fieldset>
           <legend>{ HEADER_INPUTS }</legend>
           <TextInputWithAction
             name={NAME}
             type="text"
             label="Name:"
             inputRef={nameRef}
             dispatch={dispatch}
             action={addEntry}
           />
           <TextInputWithAction
             name={ROLE}
             type="text"
             label="Role:"
             inputRef={roleRef}
             action={addEntry}
             dispatch={dispatch}
           />
         </fieldset>
       </article>
       <article className="entry-control-box">
         <h5>{ NAME_ENTRY_CONTROL }</h5>
         {renderEntries(nameArr, NAME)}
       </article>
       <article className="entry-control-box">
         <h5>{ ROLE_ENTRY_CONTROL }</h5>
         {renderEntries(roleArr, ROLE)}
       </article>
     </>
   )
}

export default HeaderPage;
