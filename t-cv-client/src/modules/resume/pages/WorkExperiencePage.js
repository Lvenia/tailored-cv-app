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
  useInitializeRefsBySection(WORK);
  useHandleGroupRef(WORK);
  //TODO: 10/01/2022 [] call useInitializeRefsBySection before useHandleGroupRef in similar components
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
      {//TODO: 10/10/2022 [] pass dispatch and section as props to avoid calling useRelevantStateAndDispatch twice
      }    </>
  );
};

export default WorkExperiencePage;
