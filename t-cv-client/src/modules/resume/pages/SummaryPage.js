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
  useInitializeRef,
  useHandleRef
} from '../resumeCustomHooks';
import {
  SIMPLE_INPUT_DEFS,
  SUMMARY_INPUTS
} from '../consts';

const SummaryPage = () => {
  const SUMMARY = SIMPLE_INPUT_DEFS.summary.name;
  const [relevantState, dispatch] = useRelevantStateAndDispatch(SUMMARY);
  const { summary: summarySection } = relevantState;
  const { editedSectionName } = useGetEditedSection();
  useInitializeRef(SUMMARY);
  useHandleRef(SUMMARY);

  const handleDropChanges = () => {
    return dropChanges(dispatch);
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
        <fieldset>
          <legend>{SUMMARY_INPUTS}</legend>
          <TextInputWithAction
            textarea={true}
            label={SIMPLE_INPUT_DEFS.summary.label}
            handleAction={editedSectionName === SUMMARY ? saveChanges(dispatch) : addEntry(dispatch)}
            name={SUMMARY}
            inputRef={SIMPLE_INPUT_DEFS.summary.ref}
            onCancel={handleDropChanges}
            editedSectionName={editedSectionName}
          />
        </fieldset>
      </article>
      <article className="entry-control-box">
        <h5>{SIMPLE_INPUT_DEFS.summary.entryControl}</h5>
        {renderEntries(summarySection, SUMMARY)}
      </article>
    </>
  );
};

export default SummaryPage;
