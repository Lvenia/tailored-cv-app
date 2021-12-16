import React, { useRef } from 'react';
import {
  SUMMARY,
  SUMMARY_ENTRY_CONTROL,
  SUMMARY_INPUTS
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
  useEditedSection,
  useHandleRefs
} from './resumeCustomHooks';

const SummaryPage = () => {
  console.count('summary page renders');
  const [relevantState, dispatch] = useRelevantStateAndDispatch(SUMMARY);
  const editedSectionName = useEditedSection();
  const summaryRef = useRef('');
  const pageRefs = [
    { ref: summaryRef, name: SUMMARY },
  ];

  useHandleRefs(pageRefs);

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

  const { summary: summarySection } = relevantState;

  return (
    <>
      <article>
        <fieldset>
          <legend>{SUMMARY_INPUTS}</legend>
          <TextInputWithAction
            textarea={true}
            label="Summary:"
            handleAction={editedSectionName === SUMMARY ? saveChanges(dispatch) : addEntry(dispatch)}
            name={SUMMARY}
            inputRef={summaryRef}
            onCancel={handleDropChanges}
            editedSectionName={editedSectionName}
          />
        </fieldset>
      </article>
      <article className="entry-control-box">
        <h5>{SUMMARY_ENTRY_CONTROL}</h5>
        {renderEntries(summarySection, SUMMARY)}
      </article>
    </>
  );
};

export default SummaryPage;

