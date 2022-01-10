import React, { useRef } from 'react';
import TextInputWithAction from '../TextInputWithAction';
import ItemWithActions from '../ItemWithActions';

import {
  addEntry,
  toggleSelect,
  editEntry,
  saveChanges,
  dropChanges,
  deleteEntry,
} from '../actionHandlers';

import {
  HEADER_INPUTS,
  NAME_ENTRY_CONTROL,
  ROLE_ENTRY_CONTROL,
  SIMPLE_INPUT_DEFS,
} from '../consts';
import {
  useGetEditedSection, useHandleRef,
  useInitializeRef,
  useRelevantStateAndDispatch
} from '../resumeCustomHooks';

const NAME = SIMPLE_INPUT_DEFS.name.name;
const ROLE = SIMPLE_INPUT_DEFS.role.name;

const HeaderPage = () => {
  useInitializeRef(NAME);
  useInitializeRef(ROLE);
  const [relevantState, dispatch] = useRelevantStateAndDispatch(NAME, ROLE);
  const { editedSectionName } = useGetEditedSection();
  const nameRef = useRef('');
  const roleRef = useRef('');
  // const pageRefs = [
  //   { ref: nameRef, name: NAME },
  //   { ref: roleRef, name: ROLE }
  // ];

  // useHandleRefs(pageRefs);
  useHandleRef(NAME, ROLE);
  useInitializeRef(NAME);
  useInitializeRef(ROLE);


  const renderTextInputs = () => {
    return (
      <fieldset>
        <legend>{HEADER_INPUTS}</legend>
        <TextInputWithAction
          name={NAME}
          label="Name:"
          // inputRef={nameRef}
          handleAction={editedSectionName === NAME ? saveChanges(dispatch) : addEntry(dispatch)}
          onCancel={() => dropChanges(dispatch)}
          editedSectionName={editedSectionName}
        />
        <TextInputWithAction
          name={ROLE}
          label="Role:"
          // inputRef={roleRef}
          handleAction={editedSectionName === ROLE ? saveChanges(dispatch) : addEntry(dispatch)}
          onCancel={() => dropChanges(dispatch)}
          editedSectionName={editedSectionName}
        />
      </fieldset>
    );
  };

  const renderEntries = (stateSection, sectionName) => {
    const editMode = editedSectionName !== null; //some of entries is currently edited
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
      );
    });
  };

  const { name: nameSection, role: roleSection } = relevantState;
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
  );
};

export default HeaderPage;

//TODO [] use refs from inputDefinitions const => this will prevent passing refs as props, also should allow to render input fields in loop
