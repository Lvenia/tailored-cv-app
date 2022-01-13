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

const EducationPage = () => {
  const { name: EDUCATION } = INPUT_DEFINITIONS.education;
  const [relevantState, dispatch] = useRelevantStateAndDispatch(EDUCATION);
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
      <ItemGroups
        dispatch={dispatch}
        relevantSection={relevantState}
        sectionName={EDUCATION}
        isDisabled={editedSectionName !== null}
      />
    </>
  );
};

export default EducationPage;
