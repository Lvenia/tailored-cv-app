import {
  ADD_ENTRY,
  DELETE_ENTRY,
  EDIT_ENTRY,
  SAVE_CHANGES,
  DROP_CHANGES,
  TOGGLE_SELECT,
  TOGGLE_BULLET_SELECT
} from './consts';

import { generateId } from '../utils';

export const addEntry = (dispatch) => {
  return (sectionName, value) => {
    dispatch({
      type: ADD_ENTRY,
      payload: {
        item: {
          id: generateId(),
          value,
        },
        isSelected: false,
        sectionName
      }
    });
  };
};

export const editEntry = (dispatch) => {
  return (sectionName, entry) => {
    dispatch({ type: EDIT_ENTRY, payload: { sectionName, entry } });
  };
};

export const saveChanges = (dispatch) => {
  return (sectionName, value) => {
    dispatch({ type: SAVE_CHANGES, payload: { sectionName, value } });
  };
};

export const dropChanges = (dispatch) => {
  dispatch({ type: DROP_CHANGES, payload: {} }); //TODO: payload as empty obj to prevent undefined in reducer?
};

export const deleteEntry = (dispatch) => {
  return (sectionName, id) => {
    dispatch({ type: DELETE_ENTRY, payload: { sectionName, id } });
  };
};

export const toggleSelect = (dispatch) => {
  return (sectionName, id) => {
    dispatch({ type: TOGGLE_SELECT, payload: { sectionName, id } });
  };
};

export const toggleBulletSelect = (dispatch) => {
  return (id) => (sectionName, bulletId) => {
    dispatch({ type: TOGGLE_BULLET_SELECT, payload: { sectionName, id, bulletId } });
  };
};
