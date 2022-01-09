import React from 'react';
import { FaCogs } from 'react-icons/fa';
import { useRelevantStateAndDispatch } from '../resume/resumeCustomHooks';
import { INPUT_DEFINITIONS } from '../resume/consts';
import ExperienceItems from './ExperienceItems';
import { getAllSelectedItems } from '../utils';

const Experience = () => {
  const EXPERIENCE = INPUT_DEFINITIONS.experience.name;
  const [relevantState] = useRelevantStateAndDispatch(EXPERIENCE);
  const { experience } = relevantState;
  const selectedItems = getAllSelectedItems(experience);

  return selectedItems ? (
    <article>
      <h3>
        <FaCogs/>
        Experience
      </h3>
      <ExperienceItems selectedItems={selectedItems}/>
    </article>
  ) : null;
};

export default Experience;
