import React, { useRef } from 'react';
import {
  SKILLS,
  SKILLS_ENTRY_CONTROL,
  SKILLS_INPUTS
} from '../consts';
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
  useHandleRefs
} from '../resumeCustomHooks';

const SkillsPage = () => {
  console.count('summary page renders');
  const [relevantState, dispatch] = useRelevantStateAndDispatch(SKILLS);
  const { editedSectionName } = useGetEditedSection();
  const skillsRef = useRef('');
  const pageRefs = [
    { ref: skillsRef, name: SKILLS },
  ];

  useHandleRefs(pageRefs);

  const handleDropChanges = () => {
    return dropChanges(dispatch);
  };

  const renderInputs = () => {
    return (
      <fieldset>
        <legend>{SKILLS_INPUTS}</legend>
        <TextInputWithAction
          label="Skills:"
          handleAction={editedSectionName === SKILLS ? saveChanges(dispatch) : addEntry(dispatch)}
          name={SKILLS}
          inputRef={skillsRef}
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

  const { skills: skillsSection } = relevantState;

  return (
    <>
      <article>
        {renderInputs()}
      </article>
      <article className="entry-control-box">
        <h5>{SKILLS_ENTRY_CONTROL}</h5>
        {renderEntries(skillsSection, SKILLS)}
      </article>
    </>
  );
};

export default SkillsPage;

