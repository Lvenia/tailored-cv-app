import React from 'react';
import PropTypes from 'prop-types';
import ItemGroupWithActions from './ItemGroupWithActions';
import { useGetEditedSection, useRelevantStateAndDispatch } from './resumeCustomHooks';
import { deleteEntry, editEntry, toggleBulletSelect, toggleSelect } from './actionHandlers';
import { ENTRY_CONTROL } from './consts';

const ItemGroups = ({ sectionName }) => {
  const [relevantState, dispatch] = useRelevantStateAndDispatch(sectionName);
  const { editedSectionName } = useGetEditedSection();
  const section = relevantState[sectionName];//[{…}, {…}, {…}]
  return (
    <>
      {section.map(el => {
        let isDisabled = editedSectionName !== null;
        return (
          <article key={el.item.id} className={ENTRY_CONTROL}>
            <ItemGroupWithActions
              name={sectionName}
              entry={el} //{item:{id, value}, isSelected}
              handleToggleSelect={toggleSelect(dispatch)}
              handleBulletToggle={toggleBulletSelect(dispatch)}
              handleEdit={editEntry(dispatch)}
              handleDelete={deleteEntry(dispatch)}
              disabled={isDisabled}
            />
          </article>
        )
      })}
    </>
  )
};

ItemGroups.propTypes = {
  sectionName: PropTypes.string.isRequired
}

export default ItemGroups;
