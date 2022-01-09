import React from 'react';
import PropTypes from 'prop-types';
import { getAllSelectedItems } from '../resume/consts';

const ExperienceItems = ({ selectedItems }) => {
  return (
    <ul>
      {selectedItems.map(el => {
        const { id, value } = el.item;
        const { startDate, endDate, header, subheader, bulletPoints } = value;
        const selectedBullets = getAllSelectedItems(bulletPoints);
        return (
          <li key={id} className="experience">
            <div className="date-header">
              <span>{startDate && startDate}{endDate && ' - ' + endDate}</span>
              <h4>{header && header}</h4>
            </div>
            <h5>{subheader && subheader}</h5>
            {selectedBullets ? <div className="preview-bullets">
              <ul>
                {selectedBullets.map(bullet => {
                  const { id, value } = bullet.item;
                  return <li key={id}>{value}</li>;
                })}
              </ul>
            </div> : null}
          </li>
        );
      })}
    </ul>
  );
};

ExperienceItems.propTypes = {
  selectedItems: PropTypes.array.isRequired
};

export default ExperienceItems;
