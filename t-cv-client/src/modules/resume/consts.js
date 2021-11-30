export const ENTER = 'Enter';

//action types
export const ADD_ENTRY = 'ADD_ENTRY';
export const DELETE_ENTRY = 'DELETE_ENTRY';
export const EDIT_ENTRY = 'EDIT_ENTRY';
export const SAVE_CHANGES = 'SAVE_CHANGES';
export const DROP_CHANGES = 'DROP_CHANGES';
export const TOGGLE_SELECT = 'TOGGLE_SELECT';


//fieldset legend
export const HEADER_INPUTS = 'CV Header';
export const NAME_ENTRY_CONTROL = 'Name Entry Control';
export const ROLE_ENTRY_CONTROL = 'Role Entry Control';

export const generateId = () => {
  return new Date().getTime().toString(); //temporary solution
}

//ENTRY GROUP NAMES
export const NAME = 'name';
export const ROLE = 'role';

//CSS CLASS NAMES
export const STYLE_HIDDEN = "hidden";
export const STYLE_ADD = "add";
export const STYLE_EDIT = "edit";
export const STYLE_ENTRY = "entry";
export const STYLE_SLC_BTN = "selected-btn"
