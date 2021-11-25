export const ENTER = 'Enter';

//action types
export const ADD_ENTRY = 'ADD_ENTRY';
export const DELETE_ENTRY = 'DELETE_ENTRY';
export const EDIT_ENTRY = 'EDIT_ENTRY';
export const SELECT_ENTRY = 'SELECT_ENTRY';
export const UNSELECT_ENTRY = 'UNSELECT_ENTRY';

//fieldset legend
export const HEADER_INPUTS = 'CV Header';
export const NAME_ENTRY_CONTROL = 'Name Entry Control';
export const ROLE_ENTRY_CONTROL = 'Role Entry Control';

export const generateId = () => {
  return new Date().getTime().toString(); //temporary solution
}