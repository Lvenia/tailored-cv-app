export const ENTER = 'Enter';

//action types
export const ADD_ENTRY = 'ADD_ENTRY';
export const DELETE_ENTRY = 'DELETE_ENTRY';
export const EDIT_ENTRY = 'EDIT_ENTRY';
export const SAVE_CHANGES = 'SAVE_CHANGES';
export const DROP_CHANGES = 'DROP_CHANGES';
export const TOGGLE_SELECT = 'TOGGLE_SELECT';

//fieldset legend
export const HEADER_INPUTS = 'Resume Header';
export const NAME_ENTRY_CONTROL = 'Name Entry Control';
export const ROLE_ENTRY_CONTROL = 'Role Entry Control';

export const CONTACT_INPUTS = 'Contact Information';
export const EMAIL_ENTRY_CONTROL = 'Email Entry Control';
export const PHONE_ENTRY_CONTROL = 'Phone Entry Control';
export const LINKEDIN_ENTRY_CONTROL = 'LinkedIn Entry Control';
export const GITHUB_ENTRY_CONTROL = 'GitHub Entry Control';

export const SUMMARY_INPUTS = 'Resume Summary';
export const SUMMARY_ENTRY_CONTROL = 'Summary Entry Control';

export const SKILLS_INPUTS = 'Skills';
export const SKILLS_ENTRY_CONTROL = 'Skills Entry Control';

export const generateId = () => {
  return new Date().getTime().toString(); //temporary solution
};

export const getKeys = (obj) => {
  const keys = [];
  for (let key in obj) {
    keys.push(key);
  }

  return keys;
};

//ENTRY GROUP NAMES
export const NAME = 'name';
export const ROLE = 'role';
export const EMAIL = 'email';
export const PHONE = 'phone';
export const LINKEDIN = 'linkedIn';
export const GITHUB = 'gitHub';
export const SUMMARY = 'summary';
export const SKILLS = 'skills';

//CSS CLASS NAMES
export const STYLE_ADD = 'add';
export const STYLE_EDIT = 'edit';
export const STYLE_ENTRY = 'entry';
export const STYLE_ENTRY_GROUP = 'group-entry';
export const STYLE_SLC_BTN = 'selected-btn';
export const STYLE_BTN_COL = 'btn-col';
export const ENTRY_CONTROL = 'entry-control-box';


//TODO: gather strings relative to inputs in mutual object - will allow to DRY code

// const INPUTS_DEFINITIONS = {
//   email: {
//     label: 'Email',
//     title: 'Email Entry Control',
//     name: 'email',
//   }
// }

export const INPUT_DEFINITIONS = {
  education: {
    name: 'education',
    fieldsetLabel: 'Education',
    inputs: {
      startDate: {
        label: 'Start date:',
        name: 'edu_start',
        ref: null
      },
      endDate: {
        label: 'End date:',
        name: 'edu_end',
        ref: null
      },
      header: {
        label: 'Header:',
        name: 'edu_header',
        ref: null
      },
      subheader: {
        label: 'Subheader:',
        name: 'edu_subheader',
        ref: null
      },
      bulletPoints: {
        label: 'Details:',
        name: 'edu_bullets',
        ref: null
      }
    },
    entryControl: 'Education Entry Control'
  }
};

