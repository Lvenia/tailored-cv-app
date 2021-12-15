import React, { useRef, useLayoutEffect } from 'react';
import {
  CONTACT_INPUTS,
  EMAIL,
  EMAIL_ENTRY_CONTROL,
  GITHUB,
  GITHUB_ENTRY_CONTROL,
  LINKEDIN,
  LINKEDIN_ENTRY_CONTROL,
  PHONE,
  PHONE_ENTRY_CONTROL,
} from './consts';
import TextInputWithAction from './TextInputWithAction';
import {
  addEntry,
  deleteEntry,
  dropChanges,
  editEntry,
  saveChanges,
  toggleSelect
} from './actionHandlers';
import ItemWithActions from './ItemWithActions';
import {
  useRelevantStateAndDispatch,
  useEditedSection
} from './resumeCustomHooks';

const ContactPage = () => {
  //TODO: 1. consider custom hook on getting just a required sections of the state and dispatch
  //TODO: 2. custom hook for getting necessary info about the edited entries
  console.count('contact page renders');
  const [relevantState, dispatch] = useRelevantStateAndDispatch(EMAIL, PHONE, LINKEDIN, GITHUB);
  const [editedSectionName, isEditedValue] = useEditedSection();

  // const { state, dispatch } = useContext(AppContext); // [td:1]
  const emailRef = useRef('');
  const phoneRef = useRef('');
  const linkedInRef = useRef('');
  const gitHubRef = useRef('');

//   const editedSectionName = state.edited.sectionName; // [td:2]
//   const isEditedValue = state.edited.entry && state.edited.entry.item.value;// [td:2]
//TODO:  useEntryRef custom hook

  useLayoutEffect(() => {
    if (!editedSectionName) {
      return;
    }

    if (editedSectionName === EMAIL) {
      emailRef.current.value = isEditedValue;
      emailRef.current.focus();
    }
    if (editedSectionName === PHONE) {
      phoneRef.current.value = isEditedValue;
      phoneRef.current.focus();
    }
    if (editedSectionName === LINKEDIN) {
      linkedInRef.current.value = isEditedValue;
      linkedInRef.current.focus();
    }
    if (editedSectionName === GITHUB) {
      gitHubRef.current.value = isEditedValue;
      gitHubRef.current.focus();
    }
  }, [editedSectionName, isEditedValue]);

  const handleDropChanges = () => {
    return dropChanges(dispatch);
  };

  const renderInputs = () => {
    return (
      <fieldset>
        <legend>{CONTACT_INPUTS}</legend>
        <TextInputWithAction
          label="Email"
          handleAction={editedSectionName === EMAIL ? saveChanges(dispatch) : addEntry(dispatch)}
          name={EMAIL}
          inputRef={emailRef}
          onCancel={handleDropChanges}
          editedSectionName={editedSectionName}
        />
        <TextInputWithAction
          label="Phone"
          handleAction={editedSectionName === PHONE ? saveChanges(dispatch) : addEntry(dispatch)}
          name={PHONE}
          inputRef={phoneRef}
          onCancel={handleDropChanges}
          editedSectionName={editedSectionName}
        />
        <TextInputWithAction
          label="LinkedIn"
          handleAction={editedSectionName === LINKEDIN ? saveChanges(dispatch) : addEntry(dispatch)}
          name={LINKEDIN}
          inputRef={linkedInRef}
          onCancel={handleDropChanges}
          editedSectionName={editedSectionName}
        />
        <TextInputWithAction
          label="GitHub"
          handleAction={editedSectionName === GITHUB ? saveChanges(dispatch) : addEntry(dispatch)}
          name={GITHUB}
          inputRef={gitHubRef}
          onCancel={handleDropChanges}
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

  const {
    email: emailSection,
    phone: phoneSection,
    gitHub: githubSection,
    linkedIn: linkedInSection,
  } = relevantState;

  //todo: useGetSectionsToBeRendered will return Array of Sections based on array of sectionNames
  return (
    <>
      <article>
        {renderInputs()}
      </article>
      <article className="entry-control-box">
        <h5>{EMAIL_ENTRY_CONTROL}</h5>
        {renderEntries(emailSection, EMAIL)}
      </article>
      <article className="entry-control-box">
        <h5>{PHONE_ENTRY_CONTROL}</h5>
        {renderEntries(phoneSection, PHONE)}
      </article>
      <article className="entry-control-box">
        <h5>{LINKEDIN_ENTRY_CONTROL}</h5>
        {renderEntries(linkedInSection, LINKEDIN)}
      </article>
      <article className="entry-control-box">
        <h5>{GITHUB_ENTRY_CONTROL}</h5>
        {renderEntries(githubSection, GITHUB)}
      </article>
    </>
  );
};

export default ContactPage;
