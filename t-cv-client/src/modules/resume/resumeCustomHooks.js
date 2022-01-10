import { useContext, useLayoutEffect, useRef } from 'react';
import { AppContext } from '../../App';
import { INPUT_DEFINITIONS, SIMPLE_INPUT_DEFS } from './consts';

/**
 * Get a relevant fragment of the global state and dispatch
 * @param {String} params - global state property names (e.g. "role", "education") to be separated as a state fragment
 * @returns {[{}, Function]} - array of state fragment and dispatch
 */
export const useRelevantStateAndDispatch = (...params) => {
  const { state, dispatch } = useContext(AppContext);
  let relevantState = {};
  params.forEach(entryName => {
    relevantState = { ...relevantState, [entryName]: state[entryName] };
  });
  return [relevantState, dispatch];
};

/**
 * Get name and value of section that is edited
 * @returns {{editedSectionName: (null|String), editedSectionValues: (null|Entry)}}
 */
export const useGetEditedSection = () => {
  const { state } = useContext(AppContext);
  return { editedSectionName: state.edited?.sectionName, editedSectionValues: state.edited?.entry };
};

/**
 * Manages ref.current.value when the input value of type SimpleValue gets edited
 * @param {string} params - global state property names (e.g. ("name", "role"))
 */
export const useHandleRef = (...params) => { //
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
    });
  }, [editedSectionName, editedValue, params]);
};

/**
 * Manages ref.current.value when the input value of type ComplexValue gets edited
 * @param {string} sectionName - global state property name (e.g. "education")
 */
export const useHandleGroupRef = (sectionName) => {
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

/**
 * Initialize ref object and assign its value to the corresponding ref property of the SIMPLE_INPUT_DEFS object
 * @param {string} sectionName - name of the global state property which item value is a type of SimpleValue (e.g. "role", "name")
 * @return {void}
 */
export const useInitializeRef = (sectionName) => {
  SIMPLE_INPUT_DEFS[sectionName].ref = useRef('');
};

/**
 * Initialize ref objects and assign their values to the corresponding ref properties of INPUT_DEFINITIONS object
 * @param {string} sectionName - name of the global state property which item value is a type of ComplexValue (e.g. "education", "workExperience")
 * @return {void}
 */
export const useInitializeRefsBySection = (sectionName) => {
  const { inputs } = INPUT_DEFINITIONS[sectionName];
  inputs.startDate.ref = useRef('');
  inputs.endDate.ref = useRef('');
  inputs.header.ref = useRef('');
  inputs.subheader.ref = useRef('');
  inputs.bulletPoints.ref = useRef('');
};

//TODO: 10-01-2022 rename, remove unnecessary, take a closer look at useRelevantAppStateAndDispatch [X]
//TODO: 10-01-2022 add js doc to custom hooks [x]
//TODO: after INPUT_DEFINITIONS is done remove useHandleRefs [x]
