import React from 'react';
import InputGroupWithActions from './InputGroupWithActions';
import ItemGroupWithActions from './ItemGroupWithActions';

import {
  addEntry,
  deleteEntry,
  dropChanges,
  editEntry,
  saveChanges, toggleBulletSelect,
  toggleSelect
} from './actionHandlers';

import { ENTRY_CONTROL, INPUT_DEFINITIONS } from './consts';

import {
  useGetEditedSection,
  useHandleGroupRef,
  useInitializeRefsBySection,
  useRelevantStateAndDispatch
} from './resumeCustomHooks';

const { name: EDUCATION } = INPUT_DEFINITIONS.education;

const EducationPage = () => {
  const [relevantState, dispatch] = useRelevantStateAndDispatch(EDUCATION);//[{},{}], func
  useHandleGroupRef(EDUCATION);
  useInitializeRefsBySection(EDUCATION);
  const { editedSectionName, editedSectionValues } = useGetEditedSection();
  const bulletPoints = editedSectionValues?.item.value.bulletPoints;
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
            handleBulletToggle={toggleBulletSelect(dispatch)}
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
//TODO: bullet edit [x]
//TODO: bullet delete [x]
//TODO: remove bullets list on cancel [x]
//TODO: select/unselect bullets [X]
//TODO: fix styles of bullets in itemWithActions [X]
//TODO: fix styles of buttons in itemGroupWithActions [X]
//TODO: fix buttons in multiline items [x]
//TODO: fix bullets position in InputGroupWithActions [x]
