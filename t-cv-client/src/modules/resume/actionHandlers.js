// import {
//   ADD_ENTRY,
//   DELETE_ENTRY,
//   EDIT_ENTRY,
//   generateId,
//   SELECT_ENTRY,
//   UNSELECT_ENTRY
// } from "./consts";
//
// export const addEntry = (name, value, dispatch) => {
//   dispatch({ type: ADD_ENTRY, payload: { id: generateId(), name, value }})
// };
//
// export const editEntry = (id, name, dispatch) => {
//   dispatch({type: EDIT_ENTRY, payload: {id, name}});
// };
//
// export const deleteEntry = (id, name, dispatch) => {
//   dispatch({type: DELETE_ENTRY, payload: {id, name}});
// };
//
// export const toggleSelect = (id, name, shouldBeSelected, dispatch) => {
//   if (shouldBeSelected) {
//     dispatch({type: UNSELECT_ENTRY, payload: {id, name}});
//   } else {
//     dispatch({type: SELECT_ENTRY, payload: {id, name}});
//   }
// }
