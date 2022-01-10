export const ENTER = 'Enter';

//action types
export const ADD_ENTRY = 'ADD_ENTRY';
export const DELETE_ENTRY = 'DELETE_ENTRY';
export const EDIT_ENTRY = 'EDIT_ENTRY';
export const SAVE_CHANGES = 'SAVE_CHANGES';
export const DROP_CHANGES = 'DROP_CHANGES';
export const TOGGLE_SELECT = 'TOGGLE_SELECT';
export const TOGGLE_BULLET_SELECT = 'TOGGLE_BULLET_SELECT';

//resume pages fieldset legends
export const HEADER_INPUTS = 'Resume Header';
export const CONTACT_INPUTS = 'Contact Information';
export const SUMMARY_INPUTS = 'Resume Summary';
export const SKILLS_INPUT = 'Skills';

//CSS CLASS NAMES
export const STYLE_ADD = 'add';
export const STYLE_EDIT = 'edit';
export const STYLE_ENTRY = 'entry';
export const STYLE_ENTRY_GROUP = 'group';
export const STYLE_ENTRY_HEADER = 'header';
export const STYLE_ENTRY_SUBHEADER = 'subheader';
export const STYLE_SLC_BTN = 'selected-btn';
export const STYLE_GROUP_LEGEND = 'group-legend';
export const ENTRY_CONTROL = 'entry-control-box';

//TODO: 10-01-2022 [X] gather strings relative to inputs in mutual object - will allow to DRY code

export const SIMPLE_INPUT_DEFS = {
  name: {
    label: 'Name:',
    name: 'name',
    ref: null,
    entryControl: 'Name Entry Control'
  },
  role: {
    label: 'Role:',
    name: 'role',
    ref: null,
    entryControl: 'Role Entry Control'
  },
  email: {
    label: 'Email:',
    name: 'email',
    ref: null,
    entryControl: 'Email Entry Control'
  },
  phone: {
    label: 'Phone:',
    name: 'phone',
    ref: null,
    entryControl: 'Phone Entry Control'
  },
  linkedIn: {
    label: 'LinkedIn:',
    name: 'linkedIn',
    ref: null,
    entryControl: 'LinkedIn Entry Control'
  },
  gitHub: {
    label: 'GitHub:',
    name: 'gitHub',
    ref: null,
    entryControl: 'GitHub Entry Control'
  },
  summary: {
    label: 'Summary:',
    name: 'summary',
    ref: null,
    entryControl: 'Summary Entry Control'
  },
  skills: {
    label: 'Skill:',
    name: 'skills',
    ref: null,
    entryControl: 'Skills Entry Control'
  },
}

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
  },
  workExperience: {
    name: 'workExperience',
    fieldsetLabel: 'Work Experience',
    inputs: {
      startDate: {
        label: 'Start date:',
        name: 'work_start',
        ref: null
      },
      endDate: {
        label: 'End date:',
        name: 'work_end',
        ref: null
      },
      header: {
        label: 'Header:',
        name: 'work_header',
        ref: null
      },
      subheader: {
        label: 'Subheader:',
        name: 'work_subheader',
        ref: null
      },
      bulletPoints: {
        label: 'Details:',
        name: 'work_bullets',
        ref: null
      }
    },
    entryControl: 'Work Experience Entry Control'
  },
  experience: {
    name: 'experience',
    fieldsetLabel: 'Experience',
    inputs: {
      startDate: {
        label: 'Start date:',
        name: 'exp_start',
        ref: null
      },
      endDate: {
        label: 'End date:',
        name: 'exp_end',
        ref: null
      },
      header: {
        label: 'Header:',
        name: 'exp_header',
        ref: null
      },
      subheader: {
        label: 'Subheader:',
        name: 'exp_subheader',
        ref: null
      },
      bulletPoints: {
        label: 'Details:',
        name: 'exp_bullets',
        ref: null
      }
    },
    entryControl: 'Experience Entry Control'
  }
};
