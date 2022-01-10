import React from 'react';
import TextInputWithAction from '../TextInputWithAction';
import ItemWithActions from '../ItemWithActions';
import {
  addEntry,
  deleteEntry,
  dropChanges,
  editEntry,
  saveChanges,
  toggleSelect
} from '../actionHandlers';
import {
  useRelevantStateAndDispatch,
  useGetEditedSection,
  useHandleRef,
  useInitializeRef
} from '../resumeCustomHooks';
import { SIMPLE_INPUT_DEFS, SKILLS_INPUT } from '../consts';

const SkillsPage = () => {
  const SKILLS = SIMPLE_INPUT_DEFS.skills.name;
  const [relevantState, dispatch] = useRelevantStateAndDispatch(SKILLS);
  const { editedSectionName } = useGetEditedSection();
  useInitializeRef(SKILLS);
  useHandleRef(SKILLS);

  const handleDropChanges = () => {
    return dropChanges(dispatch);
  };

  const renderInputs = () => {
    return (
      <fieldset>
        <legend>{SKILLS_INPUT}</legend>
        <TextInputWithAction
          label="Skills:"
          handleAction={editedSectionName === SKILLS ? saveChanges(dispatch) : addEntry(dispatch)}
          name={SKILLS}
          inputRef={SIMPLE_INPUT_DEFS.skills.ref}
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
        <h5>{SIMPLE_INPUT_DEFS.skills.entryControl}</h5>
        {renderEntries(skillsSection, SKILLS)}
      </article>
    </>
  );
};

export default SkillsPage;

