import React from 'react';
import InputGroupWithActions from './InputGroupWithActions';
import ItemGroupWithActions from './ItemGroupWithActions';

import {
    useGetEditedSection,
    useHandleGroupRef,
    useInitializeRefsBySection,
    useRelevantStateAndDispatch
} from './resumeCustomHooks';
import {
    ENTRY_CONTROL,
    INPUT_DEFINITIONS
} from './consts';
import {
    addEntry,
    deleteEntry,
    dropChanges,
    editEntry,
    saveChanges,
    toggleBulletSelect,
    toggleSelect
} from './actionHandlers';

const WORK = INPUT_DEFINITIONS.workExperience.name;

const WorkExperiencePage = () => {
    //get relevant piece of state and dispatch method to call action creators
    const [relevantState, dispatch] = useRelevantStateAndDispatch(WORK);
    //call useLayoutEffect before screen painting
    useHandleGroupRef(WORK);
    // create ref object for each input field, assign it to relevant ref key in INPUT_DEFINITIONS object
    useInitializeRefsBySection(WORK);
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
//TODO: create custom hook that assigns ref object to a ref property of INPUT_DEFINITIONS obj to DRY multiple input entries [X]
//TODO: DRY renderEntries []