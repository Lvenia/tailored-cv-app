import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import ExperienceItems from './ExperienceItems';
import { INPUT_DEFINITIONS } from '../resume/consts';
import { useRelevantStateAndDispatch } from '../resume/resumeCustomHooks';
import { getAllSelectedItems } from '../utils';

const Education = () => {
  const EDUCATION = INPUT_DEFINITIONS.education.name;
  const [relevantState] = useRelevantStateAndDispatch(EDUCATION);
  const { education } = relevantState;
  const selectedItems = getAllSelectedItems(education);

  return selectedItems ? (
    <article>
      <h3>
        <FaGraduationCap/>
        Education
      </h3>
      <ExperienceItems selectedItems={selectedItems}/>
    </article>
  ) : null;
};

export default Education;
