import {
  ADD_ENTRY,
  DELETE_ENTRY,
  EDIT_ENTRY,
  SELECT_ENTRY,
  UNSELECT_ENTRY,
  generateId,
} from './consts';

export const addEntry = (dispatch) => {
  return (value, sectionName) => {
    dispatch({
      type: ADD_ENTRY,
      payload: {
        item: {
          id: generateId(),
          value,
        },
        selected: false,
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

export const toggleSelect = (dispatch, data) => {
  return ({ item, shouldBeSelected, entryName }) => {
    const { id } = item;
    if (shouldBeSelected) {
      dispatch({ type: UNSELECT_ENTRY, payload: { id, name: entryName } });
    } else {
      dispatch({ type: SELECT_ENTRY, payload: { id, name: entryName } });
    }
  }
}
