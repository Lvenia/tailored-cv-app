import {
  ADD_ENTRY,
  DELETE_ENTRY,
  DROP_CHANGES,
  EDIT_ENTRY,
  SAVE_CHANGES,
  TOGGLE_BULLET_SELECT,
  TOGGLE_SELECT
} from './modules/resume/consts'
import { mockData } from './modules/resume/mockData';

export const initialState = mockData;
export const reducer = (state, action) => {

  const { item, isSelected, sectionName, id, entry, value, bulletId } = action.payload;

  switch (action.type) {
    case ADD_ENTRY:
      const entryToAdd = {
        item,
        isSelected
      };
      const afterAdd = state[sectionName].concat(entryToAdd);
      return {
        ...state,
        [sectionName]: afterAdd
      };
    case TOGGLE_SELECT:
      const afterToggle = state[sectionName].map(entry => {
        if (entry.item.id === id) {
          entry.isSelected = !entry.isSelected;
        }
        return entry;
      });
      return {
        ...state,
        [sectionName]: afterToggle
      };
    case TOGGLE_BULLET_SELECT:
      //replace entries bulletPoints with new value after toggle
      let targetToggleEntry = state[sectionName]?.find(entry => entry.item.id === id);
      targetToggleEntry.item.value.bulletPoints.forEach(bullet => {
        if (bullet.item.id === bulletId) {
          bullet.isSelected = !bullet.isSelected;
        }
      });
      //replace entry with new value (bullets toggled)
      const afterBulletToggle = state[sectionName].map(entry => {
        if (entry.item.id === id) {
          entry = targetToggleEntry;
        }
        return entry;
      });

      return {
        ...state,
        [sectionName]: afterBulletToggle
      };
    case EDIT_ENTRY:
      const editedEntry = {
        sectionName,
        entry
      };
      return {
        ...state,
        edited: editedEntry,
      };
    case SAVE_CHANGES:
      const editedEntryId = state.edited.entry.item.id;
      const afterSave = state[sectionName].map(entry => {
        const { id } = entry.item;
        if (id === editedEntryId) {
          entry.item.value = value;
        }
        return entry;
      });
      return {
        ...state,
        [sectionName]: afterSave,
        edited: {
          sectionName: null,
          entry: null,
        }
      };
    case DROP_CHANGES:
      return {
        ...state,
        edited: {
          sectionName: null,
          entry: null,
        }
      };
    case DELETE_ENTRY:
      const afterDelete = state[sectionName].filter(entry => entry.item.id !== id);
      return {
        ...state,
        [sectionName]: afterDelete
      };
    default:
      throw new Error('========Error from reducer=====');
  }
};
