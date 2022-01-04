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
  useGetEditedSection,
  useHandleGroupRef,
  useRelevantStateAndDispatch
} from './resumeCustomHooks';

const { name: EDUCATION } = INPUT_DEFINITIONS.education;

const EducationPage = () => {
  const [relevantState, dispatch] = useRelevantStateAndDispatch(EDUCATION);//[{},{}], func
  const { editedSectionName, editedSectionValues } = useGetEditedSection();
  const bulletPoints = editedSectionValues?.item.value.bulletPoints;
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
      let isDisabled = editedSectionName !== null; //true if state.edited.sectionName is any string
      return (
        <article key={el.item.id} className={ENTRY_CONTROL}>
          <ItemGroupWithActions
            name={EDUCATION}
            entry={el} //{item:{id, value}, isSelected}
            handleToggleSelect={toggleSelect(dispatch)}
            handleEdit={editEntry(dispatch)}
            handleDelete={deleteEntry(dispatch)}
            disabled={isDisabled}
          />
        </article>
      );
    });
  };

  return (
    <>
      <article>
        <InputGroupWithActions
          name={EDUCATION}
          editedSectionName={editedSectionName}
          bulletsArr={bulletPoints}
          onCancel={() => dropChanges(dispatch)}
          handleAction={editedSectionName === EDUCATION ? saveChanges(dispatch) : addEntry(dispatch)}
        />
      </article>
      {renderEntries()}
    </>
  );
};

export default EducationPage;

//4/01/2022
//TODO: turn off autofill [x]
//TODO: make details field active on edit [x] => instead save/cancel btn pair show add btn [x]
//TODO: bullet add [x]
//TODO: bullet edit []
//TODO: bullet delete []
//TODO: remove bullets list on cancel [x]

