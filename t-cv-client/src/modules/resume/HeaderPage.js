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
  // const editedValue = state.edited.entry ? state.edited.entry.value : null;

  useLayoutEffect(() => {
    console.count('useLayoutEffect');

    if (!editedSectionName) {
      return;
    }

    if (editedSectionName === NAME) {
      nameRef.current.value = state.edited.entry.item.value;
      roleRef.current.value = "";

    }
    if (editedSectionName === ROLE) {
      roleRef.current.value = state.edited.entry.item.value;
      nameRef.current.value = "";
    }
  }, [editedSectionName]);

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
          // isEdited={editedSectionName === NAME}
          // disabled={editedSectionName === ROLE}
        />
        <TextInputWithAction
          name={ROLE}
          label='Role:'
          inputRef={roleRef}
          handleAction={editedSectionName === ROLE ? saveChanges(dispatch) : addEntry(dispatch)}
          onCancel={() => dropChanges(dispatch)}
          editedSection={state.edited}
          // isEdited={editedSectionName === ROLE}
          // disabled={editedSectionName === NAME}
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
          sectionName={sectionName}
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
