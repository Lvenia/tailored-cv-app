import React from 'react';
import InputGroupWithActions from '../InputGroupWithActions';
import ItemGroups from '../ItemGroups';

import {
  addEntry,
  dropChanges,
  saveChanges,
} from '../actionHandlers';

import {
  useGetEditedSection,
  useHandleGroupRef,
  useInitializeRefsBySection,
  useRelevantStateAndDispatch
} from '../resumeCustomHooks';

import { INPUT_DEFINITIONS } from '../consts';

const { name: EDUCATION } = INPUT_DEFINITIONS.education;

const EducationPage = () => {
  const [, dispatch] = useRelevantStateAndDispatch(EDUCATION);//[{},{}], func
  useHandleGroupRef(EDUCATION);
  useInitializeRefsBySection(EDUCATION);
  const { editedSectionName, editedSectionValues } = useGetEditedSection();
  const bulletPoints = editedSectionValues?.item.value.bulletPoints;

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
      <ItemGroups sectionName={EDUCATION}/>
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
