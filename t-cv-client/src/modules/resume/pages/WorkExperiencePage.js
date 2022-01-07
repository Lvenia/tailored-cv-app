import React from 'react';
import InputGroupWithActions from '../InputGroupWithActions';
import ItemGroups from '../ItemGroups';

import {
  useGetEditedSection,
  useHandleGroupRef,
  useInitializeRefsBySection,
  useRelevantStateAndDispatch
} from '../resumeCustomHooks';

import { addEntry, dropChanges, saveChanges } from '../actionHandlers';

import { INPUT_DEFINITIONS } from '../consts';

const WORK = INPUT_DEFINITIONS.workExperience.name;

const WorkExperiencePage = () => {
  const [, dispatch] = useRelevantStateAndDispatch(WORK);
  useHandleGroupRef(WORK);
  useInitializeRefsBySection(WORK);
  const { editedSectionName, editedSectionValues } = useGetEditedSection();
  const bulletPoints = editedSectionValues?.item.value.bulletPoints;

  return (
    <>
      <article>
        <InputGroupWithActions
          name={WORK}
          editedSectionName={editedSectionName}
          bulletsArr={bulletPoints}
          onCancel={() => dropChanges(dispatch)}
          handleAction={editedSectionName === WORK ? saveChanges(dispatch) : addEntry(dispatch)}
        />
      </article>
      <ItemGroups sectionName={WORK}/>
    </>
  );
};

export default WorkExperiencePage;
