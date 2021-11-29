import {
  ADD_ENTRY,
  DELETE_ENTRY,
  EDIT_ENTRY,
  TOGGLE_SELECT,
  SELECT_ENTRY,
  UNSELECT_ENTRY,
  generateId,
} from './consts';

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
    })
  }
};

export const editEntry = (dispatch, id, name, value) => {
  dispatch({ type: EDIT_ENTRY, payload: { id, name, value } });
};

export const deleteEntry = (dispatch, id, name) => {
  dispatch({ type: DELETE_ENTRY, payload: { id, name } });
};

export const toggleSelect = (dispatch) => {
  return (sectionName, id) => {
    dispatch({ type: TOGGLE_SELECT, payload: { sectionName, id } });
  }
}
