import { useContext, useLayoutEffect, useRef } from 'react';
import { AppContext } from '../../App';
import { getKeys, INPUT_DEFINITIONS } from './consts';

export const useRelevantStateAndDispatch = (...params) => { //["name","role"]
  const { state, dispatch } = useContext(AppContext);
  let relevantState = {};
  params.forEach(entryName => {
    relevantState = { ...relevantState, [entryName]: state[entryName] };
  });

  return [relevantState, dispatch]; //[{}, func]
};

export const useGetEditedSection = () => {
  const { state } = useContext(AppContext);
  return { editedSectionName: state.edited?.sectionName, editedSectionValues: state.edited?.entry };
};

//TODO: after INPUT_DEFINITIONS is done adjust useHandleRefs
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

//useHandleGroupRef manages input.current.value when the input value gets edited
export const useHandleGroupRef = (name) => { //"role", "name", "education"
  const { state } = useContext(AppContext);
  const editedSectionName = state?.edited?.sectionName;
  const editedValue = state?.edited?.entry?.item?.value;
  const { inputs } = INPUT_DEFINITIONS[name];
  const keys = getKeys(inputs);

  useLayoutEffect(() => {
    if (!editedSectionName) {
      return;
    }

    if (editedSectionName === name)
      inputs[keys[0]].ref.current.focus(); //focus first input field

    keys.forEach(subSectionName => {
      const { ref } = inputs[subSectionName];
      if (subSectionName === 'bulletPoints') {
        ref.current.value = '';
      } else {
        ref.current.value = editedValue[subSectionName];
      }

    });
  }, [editedSectionName, name, editedValue, inputs, keys]);
};

//useMultipleInputsRefAssign: accepts sectionName like "education" or "workExperience"; use to create ref object and assign its value to the ref property of the INPUT_DEFINITION object. Applies !only in case of entries with multiple inputs! like education or workExperience.
export const useMultipleInputsRefAssign = (sectionName) => {
  const { inputs } = INPUT_DEFINITIONS[sectionName];
  const startRef = useRef('');
  const endRef = useRef('');
  const headerRef = useRef('');
  const subheaderRef = useRef('');
  const bulletRef = useRef('');
  inputs.startDate.ref = startRef;
  inputs.endDate.ref = endRef;
  inputs.header.ref = headerRef;
  inputs.subheader.ref = subheaderRef;
  inputs.bulletPoints.ref = bulletRef;
};

//todo: rename, remove unnecessary, take a closer look at useRelevantAppStateAndDispatch