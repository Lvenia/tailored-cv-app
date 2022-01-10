export const ENTER = 'Enter';

//action types
export const ADD_ENTRY = 'ADD_ENTRY';
export const DELETE_ENTRY = 'DELETE_ENTRY';
export const EDIT_ENTRY = 'EDIT_ENTRY';
export const SAVE_CHANGES = 'SAVE_CHANGES';
export const DROP_CHANGES = 'DROP_CHANGES';
export const TOGGLE_SELECT = 'TOGGLE_SELECT';
export const TOGGLE_BULLET_SELECT = 'TOGGLE_BULLET_SELECT';

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


//ENTRY GROUP NAMES
// export const NAME = 'name';
// export const ROLE = 'role';
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
export const STYLE_ENTRY_GROUP = 'group';
export const STYLE_ENTRY_HEADER = 'header';
export const STYLE_ENTRY_SUBHEADER = 'subheader';
export const STYLE_SLC_BTN = 'selected-btn';
export const STYLE_BTN_ROW = 'btn-row';
export const STYLE_GROUP_LEGEND = 'group-legend';
export const ENTRY_CONTROL = 'entry-control-box';

//TODO: 10-01-2022 gather strings relative to inputs in mutual object - will allow to DRY code

// const INPUTS_DEFINITIONS = {
//   email: {
//     label: 'Email',
//     title: 'Email Entry Control',
//     name: 'email',
//   }
// }

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

