import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import {
  STYLE_ENTRY_GROUP,
  STYLE_ENTRY_HEADER,
  STYLE_ENTRY_SUBHEADER,
  STYLE_GROUP_LEGEND,
  STYLE_SLC_BTN
} from './consts';
import ItemWithActions from './ItemWithActions';

const ItemGroupWithActions = ({
  name,
  entry,
  handleToggleSelect,
  handleEdit,
  handleDelete,
  disabled,
  handleBulletToggle
}) => {
  const { item, isSelected } = entry;
  const { id, value } = item;

  const renderBullets = (bullets) => {
    if (typeof bullets !== 'string' && bullets.length > 0) {  //quick fix, to be removed when bullets are handled properly
      return (
        bullets.map(bullet => {
          return (
            <ItemWithActions
              key={bullet.item.id}
              entry={bullet}
              handleToggleSelect={handleBulletToggle(id)}
              name={name}
            />
          );
        })
      );
    }
  };

  return (
    <>
      <div className={STYLE_GROUP_LEGEND}>
        <div>
          {handleToggleSelect && <Button
            title="Select"
            label="S"
            handleClick={() => handleToggleSelect(name, id)}
            cssSelector={isSelected ? STYLE_SLC_BTN : ''}
            isDisabled={disabled}
          />}
          {handleEdit && <Button
            title="Edit"
            label="E"
            handleClick={() => handleEdit(name, entry)}
            isDisabled={disabled}
          />}
          {handleDelete && <Button
            title="Delete"
            label="D"
            handleClick={() => {
              handleDelete(name, id);
            }}
            isDisabled={disabled}
          />}
        </div>
        <h5>{value.startDate} - {value.endDate}</h5>
      </div>
      <div className={STYLE_ENTRY_GROUP}>
        <p className={STYLE_ENTRY_HEADER}>{value.header}</p>
        <p className={STYLE_ENTRY_SUBHEADER}>{value.subheader}</p>
        {renderBullets(value.bulletPoints)}
      </div>
    </>
  );
};

ItemGroupWithActions.propTypes = {
  name: PropTypes.string.isRequired,
  entry: PropTypes.object.isRequired,
  handleToggleSelect: PropTypes.func.isRequired,
  handleBulletToggle: PropTypes.func,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

export default ItemGroupWithActions;
