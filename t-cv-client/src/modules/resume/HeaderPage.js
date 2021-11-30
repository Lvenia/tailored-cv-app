import React, { useRef, useContext, useState } from 'react';
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
  STYLE_ADD,
  STYLE_EDIT,
  STYLE_HIDDEN
} from './consts';

const HeaderPage = () => {
  const { state, dispatch } = useContext(AppContext);
  const nameRef = useRef("");
  const roleRef = useRef("");
  const [hidden, setHidden] = useState("")

  const renderTextInputs = () => {
    //implemented this way to provide the proper ref object to input element
    if (state.edited.sectionName === null) {
      return (
        <fieldset>
          <legend>{HEADER_INPUTS}</legend>
          <TextInputWithAction
            name={NAME}
            type="text"
            label="Name:"
            inputRef={nameRef}
            handleAction={addEntry(dispatch)}
            cssClass={STYLE_ADD}
            hide={setHidden}
          />
          <TextInputWithAction
            name={ROLE}
            type="text"
            label="Role:"
            inputRef={roleRef}
            handleAction={addEntry(dispatch)}
            cssClass={STYLE_ADD}
            hide={setHidden}
          />
        </fieldset>
      )
    }
    if (state.edited.sectionName === NAME) {
      nameRef.current.value = state.edited.entry.item.value;
      return (
        <fieldset>
          <legend>{HEADER_INPUTS}</legend>
          <TextInputWithAction
            name={NAME}
            type="text"
            label="Name:"
            inputRef={nameRef}
            handleAction={saveChanges(dispatch)}
            onCancel={() => dropChanges(dispatch)}
            cssClass={STYLE_EDIT}
            edit={true}
            hide={setHidden}
          />
          <TextInputWithAction
            name={ROLE}
            type="text"
            label="Role:"
            inputRef={roleRef}
            handleAction={addEntry(dispatch)}
            cssClass={STYLE_HIDDEN}
          />
        </fieldset>
      )
    }
    if (state.edited.sectionName === ROLE) {
      roleRef.current.value = state.edited.entry.item.value;
      return (
        <fieldset>
          <legend>{HEADER_INPUTS}</legend>
          <TextInputWithAction
            name={NAME}
            type="text"
            label="Name:"
            inputRef={nameRef}
            handleAction={addEntry(dispatch)}
            cssClass={STYLE_HIDDEN}
          />
          <TextInputWithAction
            name={ROLE}
            type="text"
            label="Role:"
            inputRef={roleRef}
            handleAction={saveChanges(dispatch)}
            onCancel={() => dropChanges(dispatch)}
            cssClass={STYLE_EDIT}
            edit={true}
            hide={setHidden}
          />
        </fieldset>
      )
    }

    return (
      <fieldset>
        <legend>{HEADER_INPUTS}</legend>
        <div>
          <TextInputWithAction
            name={NAME}
            type="text"
            label="Name:"
            value={state.edited.entry.item.value}
            handleAction={saveChanges(dispatch)}
            onCancel={() => dropChanges(dispatch)}
            edit={true}
            hide={setHidden}
          />
        </div>
        <div>
          <TextInputWithAction
            name={ROLE}
            type="text"
            label="Role:"
            value={state.edited.entry.item.value}
            handleAction={saveChanges(dispatch)}
            onCancel={() => dropChanges(dispatch)}
            edit={true}
            hide={setHidden}
          />
        </div>
      </fieldset>
    )
  }

  const renderEntries = (stateSection, sectionName) => {
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
          hide={setHidden}
        />
      )
    })
  }

  const { name: nameSection, role: roleSection } = state;


  return (
    <>
      <article>
        {renderTextInputs()}
      </article>
      <article className={`entry-control-box ${hidden}`}>
        <h5>{NAME_ENTRY_CONTROL}</h5>
        {renderEntries(nameSection, NAME)}
      </article>
      <article className={`entry-control-box ${hidden}`}>
        <h5>{ROLE_ENTRY_CONTROL}</h5>
        {renderEntries(roleSection, ROLE)}
      </article>
    </>
  )
}

export default HeaderPage;
