import React, { useContext } from 'react';
import { AppContext } from '../../App';

export const useRelevantStateAndDispatch = (...params) => { //["name","role"]
  const { state, dispatch } = useContext(AppContext);
  let relevantState = {};
  [...params].forEach(entryName => {
    relevantState = { ...relevantState, [entryName]: state[entryName] };
  });

  return [relevantState, dispatch]; //[{}, func]
};

export const useEditedSection = () => {
  const { state } = useContext(AppContext);
  const editedSectionName = state?.edited?.sectionName;
  const editedValue = state?.edited?.entry?.item?.value;
  return [editedSectionName, editedValue]; // ["", ""]
};

///todo: rename, remove unnecessary, take a closer look at useRelevantAppStateAndDispatch