import React, { useRef } from 'react';
import InputGroupWithActions from './InputGroupWithActions';
import ItemGroupWithActions from './ItemGroupWithActions';

import {
  addEntry,
  deleteEntry,
  dropChanges,
  editEntry,
  saveChanges,
  toggleSelect
} from './actionHandlers';

import { ENTRY_CONTROL, INPUT_DEFINITIONS } from './consts';

import {
  useEditedSection,
  useHandleGroupRef,
  useRelevantStateAndDispatch
} from './resumeCustomHooks';

const {name: EDUCATION} = INPUT_DEFINITIONS.education;

const EducationPage = () => {
  const [relevantState, dispatch] = useRelevantStateAndDispatch(EDUCATION);//[{},{}], func
  const editedSectionName = useEditedSection();
  const startRef = useRef('');
  const endRef = useRef('');
  const headerRef = useRef('');
  const subheaderRef = useRef('');
  const bulletRef = useRef('');
  const { inputs } = INPUT_DEFINITIONS.education;
  inputs.startDate.ref = startRef;
  inputs.endDate.ref = endRef;
  inputs.header.ref = headerRef;
  inputs.subheader.ref = subheaderRef;
  inputs.bulletPoints.ref = bulletRef;

  useHandleGroupRef(EDUCATION);

  const { education: educationSection } = relevantState;

  const renderEntries = () => {
    return educationSection.map(el => {
      let isDisabled = editedSectionName !== null;
      return (
        <article key={el.item.id} className={ENTRY_CONTROL}>
          <ItemGroupWithActions
            name={EDUCATION}
            entry={el}
            handleToggleSelect={toggleSelect(dispatch)}
            handleEdit={editEntry(dispatch)}
            handleDelete={deleteEntry(dispatch)}
            disabled={isDisabled}
          />
        </article>
      );
    })
  }

  return (
    <>
      <article>
        <InputGroupWithActions
          name={EDUCATION}
          editedSectionName={editedSectionName}
          onCancel={() => dropChanges(dispatch)}
          handleAction={editedSectionName === EDUCATION ? saveChanges(dispatch) : addEntry(dispatch)}
        />
      </article>
      {renderEntries()}
    </>
  );
};

export default EducationPage;

//TODO: 20/12/2021 [x] Render items from state (90 min => 85 min)
//TODO: 20/12/2021 [X] Handle refs for start date, end, header and subheader  (90 min)?
//TODO: [X] destructure EDUCATION from the const obj
//TODO: [X] entry-control-box into const
