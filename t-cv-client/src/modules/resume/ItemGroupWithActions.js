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
    if (typeof bullets !== "string" && bullets.length > 0) {  //quick fix, to be removed when bullets are handled properly
      return (
        <ul>
          {bullets.map(bullet => {
            return (
              <>
                <ItemWithActions
                  entry={bullet}
                  handleToggleSelect={handleBulletToggle(id)}
                  name={name}
                  // handleDelete={}
                  // handleEdit={}
                >
                </ItemWithActions>
              </>
            );
          })}
        </ul>
      );
    }
  };

  return (
    <>
      <h5>{value.startDate} - {value.endDate}</h5>
      <div className={STYLE_ENTRY_GROUP}>
        <div className={STYLE_BTN_COL}>
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
        <div className="group">
          <p className="header">{value.header}</p>
          <p className="subheader">{value.subheader}</p>
          {renderBullets(value.bulletPoints)}
        </div>
      </div>
    </>
  );
};

ItemGroupWithActions.propTypes = {
  name: PropTypes.string.isRequired,
  entry: PropTypes.object.isRequired,
  handleToggleSelect: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

export default ItemGroupWithActions;
