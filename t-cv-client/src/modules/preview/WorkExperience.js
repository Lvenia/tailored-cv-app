import React from 'react';
import { MdWork } from 'react-icons/md';
import ExperienceItems from './ExperienceItems';
import { useRelevantStateAndDispatch } from '../resume/resumeCustomHooks';
import { INPUT_DEFINITIONS } from '../resume/consts';
import { getAllSelectedItems } from '../utils';

const WorkExperience = () => {
  const WORK = INPUT_DEFINITIONS.workExperience.name;
  const [relevantState] = useRelevantStateAndDispatch(WORK);
  const { workExperience } = relevantState;
  const selectedItems = getAllSelectedItems(workExperience);

  return selectedItems ? (
    <article>
      <h3>
        <MdWork/>
        Work Experience
      </h3>
      <ExperienceItems selectedItems={selectedItems}/>
    </article>
  ) : null;
};

export default WorkExperience;
