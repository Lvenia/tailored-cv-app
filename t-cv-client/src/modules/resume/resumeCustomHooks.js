import { useContext, useLayoutEffect } from 'react';
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
  return state?.edited?.sectionName;
};

// [{ref: emailRef, name: 'email'}, {ref: roleRef, name: 'role'}]
export const useHandleRefs = (arr) => {
  const { state } = useContext(AppContext);
  const editedSectionName = state?.edited?.sectionName;
  const editedValue = state?.edited?.entry?.item?.value;

  useLayoutEffect(() => {
    if (!editedSectionName) {
      return;
    }

    arr.forEach(({ ref, name }) => {
      if (editedSectionName === name) {
        ref.current.value = editedValue;
        ref.current.focus();
      }
    });
  }, [editedSectionName, editedValue, arr]);
};

export const useTest = (...names) => { //"role", "name", "education"
  const { state } = useContext(AppContext);
  const editedSectionName = state?.edited?.sectionName;
  const editedValue = state?.edited?.entry?.item?.value;

  useLayoutEffect(() => {
    if (!editedSectionName) {
      return;
    }

    // [...names].forEach((sectionName) => {
    //   if (editedSectionName === sectionName) {
    //     ref.current.value = editedValue;
    //     ref.current.focus();
    //   }
    // });
  }, [editedSectionName, editedValue, ...names]);
};
///todo: rename, remove unnecessary, take a closer look at useRelevantAppStateAndDispatch