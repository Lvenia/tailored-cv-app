import React from 'react';
import PropTypes from 'prop-types';

import ItemGroupWithActions from './ItemGroupWithActions';
import {
  deleteEntry,
  editEntry,
  toggleBulletSelect,
  toggleSelect
} from './actionHandlers';
import { ENTRY_CONTROL } from './consts';

const ItemGroups = ({ relevantSection, dispatch, isDisabled }) => {
  return (
    <>
      {relevantSection.sectionState.map(el => {
        return (
          <article key={el.item.id} className={ENTRY_CONTROL}>
            <ItemGroupWithActions
              name={relevantSection.sectionName}
              entry={el} //{item:{id, value}, isSelected}
              handleToggleSelect={toggleSelect(dispatch)}
              handleBulletToggle={toggleBulletSelect(dispatch)}
              handleEdit={editEntry(dispatch)}
              handleDelete={deleteEntry(dispatch)}
              disabled={isDisabled}
            />
          </article>
        );
      })}
    </>
  );
};

ItemGroups.propTypes = {
  relevantSection: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
};

export default ItemGroups;
