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

const ExperiencePage = () => {
  const EXPERIENCE = INPUT_DEFINITIONS.experience.name;
  const [, dispatch] = useRelevantStateAndDispatch(EXPERIENCE);
  useHandleGroupRef(EXPERIENCE);
  useInitializeRefsBySection(EXPERIENCE);
  const { editedSectionName, editedSectionValues } = useGetEditedSection();
  const bulletPoints = editedSectionValues?.item.value.bulletPoints;

  return (
    <>
      <article>
        <InputGroupWithActions
          name={EXPERIENCE}
          editedSectionName={editedSectionName}
          bulletsArr={bulletPoints}
          onCancel={() => dropChanges(dispatch)}
          handleAction={editedSectionName === EXPERIENCE ? saveChanges(dispatch) : addEntry(dispatch)}
        />
      </article>
      <ItemGroups sectionName={EXPERIENCE}/>
    </>
  );
};

export default ExperiencePage;
