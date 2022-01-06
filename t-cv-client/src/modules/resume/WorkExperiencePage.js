import React, {useRef} from 'react';
import { useGetEditedSection, useHandleGroupRef, useRelevantStateAndDispatch } from './resumeCustomHooks';
import { ENTRY_CONTROL, INPUT_DEFINITIONS } from './consts';
import InputGroupWithActions from './InputGroupWithActions';
import {
    addEntry,
    deleteEntry,
    dropChanges,
    editEntry,
    saveChanges,
    toggleBulletSelect,
    toggleSelect
} from './actionHandlers';
import ItemGroupWithActions from './ItemGroupWithActions';

const WorkExperiencePage = () => {
    //1. get relevant piece of state and dispatch method to call action creators
    const WORK = INPUT_DEFINITIONS.workExperience.name;
    const [relevantState, dispatch] = useRelevantStateAndDispatch(WORK);
    //2. call useLayoutEffect before screen painting
    useHandleGroupRef(WORK);
    //3. create ref object fro each input field, assign it to relevant ref key in INPUT_DEFINITIONS object
    const startRef = useRef('');
    const endRef = useRef('');
    const headerRef = useRef('');
    const subheaderRef = useRef('');
    const bulletRef = useRef('');
    const { inputs } = INPUT_DEFINITIONS.workExperience;
    inputs.startDate.ref = startRef;
    inputs.endDate.ref = endRef;
    inputs.header.ref = headerRef;
    inputs.subheader.ref = subheaderRef;
    inputs.bulletPoints.ref = bulletRef;
    //4. track name of the currently editet section
    const {editedSectionName, editedSectionValues} = useGetEditedSection();
    const bulletPoints = editedSectionValues?.item.value.bulletPoints;
    const { workExperience } = relevantState;

    const renderEntries = () => {
        return workExperience.map(el => {
            let isDisabled = editedSectionName !== null; //true if state.edited.sectionName is any string
            return (
              <article key={el.item.id} className={ENTRY_CONTROL}>
                  <ItemGroupWithActions
                    name={WORK}
                    entry={el} //{item:{id, value}, isSelected}
                    handleToggleSelect={toggleSelect(dispatch)}
                    handleBulletToggle={toggleBulletSelect(dispatch)}
                    handleEdit={editEntry(dispatch)}
                    handleDelete={deleteEntry(dispatch)}
                    disabled={isDisabled}
                  />
              </article>
            );
        });
    };

    return (
      <>
          <article>
              <InputGroupWithActions
                name={WORK}
                editedSectionName={editedSectionName}
                bulletsArr={bulletPoints}
                onCancel={() => dropChanges(dispatch)}
                handleAction={editedSectionName === WORK ? saveChanges(dispatch) : addEntry(dispatch)}
              />
          </article>
          {renderEntries()}
      </>
    );
};

export default WorkExperiencePage;


//06/01/2022
//TODO: Add workExperience INPUT_DEFINITIONS [x]
//TODO: Add workExperience to state (mockData object) [x]
//TODO: change ResumePage navigation + routing: Experience => Work Experience [x]

//TODO: create custom hook that assigns ref object to a ref property of INPUT_DEFINITIONS obj to DRY multiple input entries []
//TODO: DRY renderEntries