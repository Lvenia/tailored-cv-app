import React from 'react';
import { getAllSelectedItems, INPUT_DEFINITIONS } from '../resume/consts';
import { useRelevantStateAndDispatch } from '../resume/resumeCustomHooks';
import { FaGraduationCap } from 'react-icons/fa';

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

export default Education;
