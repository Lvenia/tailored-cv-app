import React, { useRef, useContext, useLayoutEffect } from 'react';
import { AppContext } from "../../App";
import TextInputWithAction from "./TextInputWithAction";
import ItemWithActions from "./ItemWithActions";

import {
  addEntry,
  toggleSelect,
  editEntry,
  saveChanges,
  dropChanges,
  deleteEntry,
} from "./actionHandlers";

import {
  HEADER_INPUTS,
  NAME_ENTRY_CONTROL,
  ROLE_ENTRY_CONTROL,
  NAME,
  ROLE,
} from './consts';

const HeaderPage = () => {
  console.count('header page renders')
  const { state, dispatch } = useContext(AppContext);
  const nameRef = useRef("");
  const roleRef = useRef("");
  const editedSectionName = state.edited.sectionName;
  const editedValue = state.edited.entry && state.edited.entry.item.value;

  useLayoutEffect(() => {
    if (!editedSectionName) {
      return;
    }

    if (editedSectionName === NAME) {
      nameRef.current.value = editedValue;
      nameRef.current.focus();
      roleRef.current.value = "";

    }
    if (editedSectionName === ROLE) {
      roleRef.current.value = editedValue;
      roleRef.current.focus();
      nameRef.current.value = "";
    }
  }, [editedSectionName, editedValue]);//editedSectionName === null after each save or cancel

  const renderTextInputs = () => {
    return (
      <fieldset>
        <legend>{HEADER_INPUTS}</legend>
        <TextInputWithAction
          name={NAME}
          label='Name:'
          inputRef={nameRef}
          handleAction={editedSectionName === NAME ? saveChanges(dispatch) : addEntry(dispatch)}
          onCancel={() => dropChanges(dispatch)}
          editedSection={state.edited}
        />
        <TextInputWithAction
          name={ROLE}
          label='Role:'
          inputRef={roleRef}
          handleAction={editedSectionName === ROLE ? saveChanges(dispatch) : addEntry(dispatch)}
          onCancel={() => dropChanges(dispatch)}
          editedSection={state.edited}
        />
      </fieldset>
    )
  }

  const renderEntries = (stateSection, sectionName) => {
    const editMode = state.edited.sectionName !== null; //some of entries is currently edited
    return stateSection.map(el => {
      const { id } = el.item;
      return (
        <ItemWithActions
          key={id}
          name={sectionName}
          entry={el}
          handleToggleSelect={toggleSelect(dispatch)}
          handleEdit={editEntry(dispatch)}
          handleDelete={deleteEntry(dispatch)}
          disabled={editMode}
        />
      )
    })
  }

  const { name: nameSection, role: roleSection } = state;
  return (
    <>
      <article>
        {renderTextInputs(HEADER_INPUTS, [NAME, ROLE])}
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
