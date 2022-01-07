import React from 'react';
import { getAllSelectedItems, INPUT_DEFINITIONS } from '../resume/consts';
import { useRelevantStateAndDispatch } from '../resume/resumeCustomHooks';
import { MdWork } from 'react-icons/md';

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
      {selectedItems.map(el => {
        const { id, value } = el.item;
        const { startDate, endDate, header, subheader, bulletPoints } = value;
        const selectedBullets = getAllSelectedItems(bulletPoints);
        return (
          <div key={id} className="experience">
            <div className="date-header">
              <span>{startDate && startDate}{endDate && ' - ' + endDate}</span>
              <div>
                <h4>{header && header}</h4>
                <h5>{subheader && subheader}</h5>
              </div>
            </div>
            {selectedBullets ? <div className="preview-bullets">
              <ul>
                {selectedBullets.map(bullet => {
                  const { id, value } = bullet.item;
                  return <li key={id}>{value}</li>;
                })}
              </ul>
            </div> : null}
          </div>
        );
      })}
    </article>
  ) : null;
};

export default WorkExperience;

//TODO: DRY Experience cards => move to separate component that receives section name as a prop