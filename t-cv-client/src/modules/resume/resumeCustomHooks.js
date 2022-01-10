import { useContext, useLayoutEffect, useRef } from 'react';
import { AppContext } from '../../App';
import { INPUT_DEFINITIONS, SIMPLE_INPUT_DEFS } from './consts';

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

export const useHandleRef = (...params) => { // "name", "role"
  const { state } = useContext(AppContext);
  const editedSectionName = state?.edited?.sectionName;
  const editedValue = state?.edited?.entry?.item?.value;

  useLayoutEffect(() => {
    if (!editedSectionName) {
      return;
    }

    params.forEach((sectionName) => {
      const { ref } = SIMPLE_INPUT_DEFS[sectionName];
      if (editedSectionName === sectionName) {
        ref.current.value = editedValue;
        ref.current.focus();
      }
      // if (editedSectionName === name) {
      //   ref.current.value = editedValue;
      //   ref.current.focus();
      // }
    });
  }, [editedSectionName, editedValue, params]);

};

/**
 * @description Manages input.current.value when the input value gets edited
 * @param {string} name
 */
export const useHandleGroupRef = (sectionName) => { //"role", "name", "education"
  const { state } = useContext(AppContext);
  const editedSectionName = state?.edited?.sectionName;
  const editedValue = state?.edited?.entry?.item?.value;
  const { inputs } = INPUT_DEFINITIONS[sectionName];
  const keys = Object.keys(inputs);

  useLayoutEffect(() => {
    if (!editedSectionName) {
      return;
    }

    if (editedSectionName === sectionName) {
      inputs[keys[0]].ref.current.focus();
    } //focus first input field

    keys.forEach(subSectionName => {
      const { ref } = inputs[subSectionName];
      if (subSectionName === 'bulletPoints') {
        ref.current.value = '';
      } else {
        ref.current.value = editedValue[subSectionName];
      }

    });
  }, [editedSectionName, sectionName, editedValue, inputs, keys]);
};

//useMultipleInputsRefAssign: accepts sectionName like "education" or "workExperience"; use to create ref object and assign its value to the ref property of the INPUT_DEFINITION object. Applies !only in case of entries with multiple inputs! like education or workExperience.
export const useInitializeRefsBySection = (sectionName) => {
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

export const useInitializeRef = (sectionName) => {
  const sectionNameRef = useRef('');
  SIMPLE_INPUT_DEFS[sectionName].ref = sectionNameRef;
};
//todo: rename, remove unnecessary, take a closer look at useRelevantAppStateAndDispatch
//TODO: add js doc to custom hooks
