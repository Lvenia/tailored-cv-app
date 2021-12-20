import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import {
  STYLE_BTN_COL,
  STYLE_ENTRY_GROUP,
  STYLE_SLC_BTN
} from './consts';
import ItemWithActions from './ItemWithActions';

const ItemGroupWithActions = ({
  name, //'education'
  entry, // {id, value: {startDate, ...., bulletpoints: [{item, isSelected}]}
  handleToggleSelect,
  handleEdit,
  handleDelete,
  disabled,
}) => {
  const { item, isSelected } = entry;
  const { id, value } = item;

  const renderBullets = (bullets) => {
    if(bullets.length > 0) {
      return (
        <ul>
          {bullets.map(bullet => {
            return <li>{bullet.item.value}</li>
          })}
        </ul>
      )
    }
  }
//STYLE_ENTRY_GROUP = group-entry///entry-control-box
  return (
    <>
      <h5>
        <date>{value.startDate} - {value.endDate}</date>
      </h5>
      <div className={STYLE_ENTRY_GROUP}>
        <div className={STYLE_BTN_COL}>
          {handleToggleSelect && <Button
            title="Select"
            label="S"
            // handleClick={() => handleToggleSelect(name, id)}
            cssSelector={isSelected ? STYLE_SLC_BTN : ''}
            // isDisabled={disabled}
          />}
          {handleEdit && <Button
            title="Edit"
            label="E"
            // handleClick={() => handleEdit(name, entry)}
            // isDisabled={disabled}
          />}
          {handleDelete && <Button
            title="Delete"
            label="D"
            // handleClick={() => {
            //   handleDelete(name, id);
            // }}
            // isDisabled={disabled}
          />}
        </div>
        <div className='group'>
          <p className='header'>{value.header}</p>
          <p className='subheader'>{value.subheader}</p>
          {renderBullets(value.bulletPoints)}
        </div>
      </div>
    </>
  );
};

ItemGroupWithActions.propTypes = {
  // name: PropTypes.string.isRequired,
  // entry: PropTypes.object.isRequired,
  // handleToggleSelect: PropTypes.func.isRequired,
  // handleEdit: PropTypes.func.isRequired,
  // handleDelete: PropTypes.func.isRequired,
  // disabled: PropTypes.bool
};

export default ItemGroupWithActions;
