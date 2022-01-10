import React from 'react';

import { CONTACT_INPUTS, SIMPLE_INPUT_DEFS } from '../consts';
import TextInputWithAction from '../TextInputWithAction';
import {
  addEntry,
  deleteEntry,
  dropChanges,
  editEntry,
  saveChanges,
  toggleSelect
} from '../actionHandlers';
import ItemWithActions from '../ItemWithActions';
import {
  useRelevantStateAndDispatch,
  useGetEditedSection,
  useInitializeRef,
  useHandleRef
} from '../resumeCustomHooks';

const ContactPage = () => {
  const EMAIL = SIMPLE_INPUT_DEFS.email.name;
  const PHONE = SIMPLE_INPUT_DEFS.phone.name;
  const LINKEDIN = SIMPLE_INPUT_DEFS.linkedIn.name;
  const GITHUB = SIMPLE_INPUT_DEFS.gitHub.name;
  const [relevantState, dispatch] = useRelevantStateAndDispatch(EMAIL, PHONE, LINKEDIN, GITHUB);
  const {
    email: emailSection,
    phone: phoneSection,
    gitHub: githubSection,
    linkedIn: linkedInSection,
  } = relevantState;
  const { editedSectionName } = useGetEditedSection();
  useInitializeRef(EMAIL);
  useInitializeRef(PHONE);
  useInitializeRef(LINKEDIN);
  useInitializeRef(GITHUB);
  useHandleRef(EMAIL, PHONE, LINKEDIN, GITHUB);

  const handleDropChanges = () => {
    return dropChanges(dispatch);
  };

  const renderInputs = (...params) => {
    return (
      <fieldset>
        <legend>{CONTACT_INPUTS}</legend>
        {params.map(sectionName => {
          return (
            <TextInputWithAction
              key={sectionName}
              name={sectionName}
              label={SIMPLE_INPUT_DEFS[sectionName].label}
              inputRef={SIMPLE_INPUT_DEFS[sectionName].ref}
              handleAction={editedSectionName === sectionName ? saveChanges(dispatch) : addEntry(dispatch)}
              onCancel={handleDropChanges}
              editedSectionName={editedSectionName}
            />
          );
        })}
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

  return (
    <>
      <article>
        {renderInputs(EMAIL, PHONE, LINKEDIN, GITHUB)}
      </article>
      <article className="entry-control-box">
        <h5>{SIMPLE_INPUT_DEFS.email.entryControl}</h5>
        {renderEntries(emailSection, EMAIL)}
      </article>
      <article className="entry-control-box">
        <h5>{SIMPLE_INPUT_DEFS.phone.entryControl}</h5>
        {renderEntries(phoneSection, PHONE)}
      </article>
      <article className="entry-control-box">
        <h5>{SIMPLE_INPUT_DEFS.linkedIn.entryControl}</h5>
        {renderEntries(linkedInSection, LINKEDIN)}
      </article>
      <article className="entry-control-box">
        <h5>{SIMPLE_INPUT_DEFS.gitHub.entryControl}</h5>
        {renderEntries(githubSection, GITHUB)}
      </article>
    </>
  );
};

export default ContactPage;
