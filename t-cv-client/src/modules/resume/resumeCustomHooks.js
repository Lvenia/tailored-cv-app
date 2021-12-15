import React, { useContext } from 'react';
import { AppContext } from '../../App';

export const useRelevantStateAndDispatch = (...params) => { //["name","role"]
  const { state, dispatch } = useContext(AppContext);
  let relevantState = {};
  [...params].map(entryName => {
    relevantState = { ...relevantState, [entryName]: state[entryName] };
  });

  return [relevantState, dispatch]; //[{}, func]
};

export const useEditedSection = () => {
  const { state } = useContext(AppContext);
  const editedSection = state.edited;
  const editedSectionName = state.edited.sectionName;
  const editedValue = state?.edited?.entry?.item?.value;
  return [editedSection, editedSectionName, editedValue]; // [{}, "", ""]
};

///todo: rename, remove unnecessary, take a closer look at useRelevantAppStateAndDispatch