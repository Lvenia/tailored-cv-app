import {
  ADD_ENTRY,
  DELETE_ENTRY,
  EDIT_ENTRY,
  SELECT_ENTRY,
  UNSELECT_ENTRY,
  generateId,
} from './consts';

export const addEntry = (dispatch, name, value) => {
  dispatch({ type: ADD_ENTRY, payload: { id: generateId(), name, value }})
};

export const editEntry = (dispatch, id, name) => {
  dispatch({type: EDIT_ENTRY, payload: {id, name}});
};

export const deleteEntry = (dispatch, id, name) => {
  dispatch({type: DELETE_ENTRY, payload: {id, name}});
};

export const toggleSelect = (dispatch, id, name, shouldBeSelected) => {
  if (shouldBeSelected) {
    dispatch({type: UNSELECT_ENTRY, payload: {id, name}});
  } else {
    dispatch({type: SELECT_ENTRY, payload: {id, name}});
  }
}
