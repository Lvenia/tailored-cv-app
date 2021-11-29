import React, { useRef, useContext, useState } from 'react';
import { AppContext } from "../../App";
import TextInputWithAction from "./TextInputWithAction";
import ItemWithActions from "./ItemWithActions";
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
  // const [editName, setEditName] = useState(false);
  // const [editRole, setEditRole] = useState(false);
  // const updateRefValue = (ref, newValue) => {
  //   ref.current.value = newValue;
  // }

  const renderEntries = (stateSection, sectionName) => {
    return stateSection.map(el => {
      // el: {
      //   item: {
      //     id: '83739302',
      //     value: 'Iryna Kresinska'
      //   },
      //   isSelected: true
      // },

      // console.log(item.item);
      const { id } = el.item;
      return (
        <ItemWithActions
          key={id}
          sectionName={sectionName}
          entry={el}
          handleToggleSelect={toggleSelect(dispatch)}
          // handleEdit={editEntry(dispatch)}
          // handleDelete={deleteEntry(dispatch)}
        />
      )
    })
  }

  const { name: nameSection, role: roleSection } = state;

  return (
    <>
      <article>
        <fieldset>
          <legend>{HEADER_INPUTS}</legend>
          <TextInputWithAction
            name={NAME}
            type="text"
            label="Name:"
            inputRef={nameRef}
            addEntry={addEntry(dispatch)}
            // editEntry={editEntry}
            // editMode={editName}
          />
          <TextInputWithAction
            name={ROLE}
            type="text"
            label="Role:"
            inputRef={roleRef}
            addEntry={addEntry(dispatch)}
            // editEntry={editEntry}
            // editMode={editRole}
          />
        </fieldset>
      </article>
      <article className="entry-control-box">
        <h5>{NAME_ENTRY_CONTROL}</h5>
        {renderEntries(nameSection, NAME)}
      </article>
      <article className="entry-control-box">
        <h5>{ROLE_ENTRY_CONTROL}</h5>
        {renderEntries(roleSection, ROLE)}
      </article>
    </>
  )
}

export default HeaderPage;
