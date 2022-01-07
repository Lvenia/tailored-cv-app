import React from 'react';
import {AiOutlineCode} from 'react-icons/ai';
import { useRelevantStateAndDispatch } from '../resume/resumeCustomHooks';
import { getAllSelectedItems, SKILLS } from '../resume/consts';

const Skills = () => {
  const [relevantState] = useRelevantStateAndDispatch(SKILLS);
  const { skills } = relevantState;
  const selectedItems = getAllSelectedItems(skills);

  return selectedItems ? (
    <article>
      <h3>
        <AiOutlineCode/>
        Skills
      </h3>
      <ul>
        {selectedItems.map(el => {
          return <li key={el.item.id}>{el.item.value}</li>
        })}
      </ul>
    </article>
  ) : null;
};

export default Skills;
