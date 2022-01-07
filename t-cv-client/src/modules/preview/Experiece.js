import React from 'react';
import { FaCogs } from 'react-icons/fa';
import { useRelevantStateAndDispatch } from '../resume/resumeCustomHooks';
import { getAllSelectedItems, INPUT_DEFINITIONS } from '../resume/consts';

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

export default Experience;
