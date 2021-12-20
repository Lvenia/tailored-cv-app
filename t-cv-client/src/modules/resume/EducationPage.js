import React, { useRef } from 'react';
import {
  EDU_BULLETS,
  EDU_END,
  EDU_HEADER,
  EDU_START,
  EDU_SUBHEADER,
  EDUCATION,
  EDUCATION_INPUTS, INPUT_DEFINITIONS,
} from './consts';
import TextInput from './TextInput';
import { addEntry, deleteEntry, dropChanges, editEntry, saveChanges, toggleSelect } from './actionHandlers';
import { useEditedSection, useHandleGroupRef, useHandleRefs, useRelevantStateAndDispatch } from './resumeCustomHooks';
import Button from '../../components/Button';
import InputGroupWithActions from './InputGroupWithActions';
import ItemWithActions from './ItemWithActions';
import ItemGroupWithActions from './ItemGroupWithActions';

const EducationPage = () => {
  const [relevantState, dispatch] = useRelevantStateAndDispatch(EDUCATION);//[{},{}], func
  const editedSectionName = useEditedSection();
  const startRef = useRef('');
  const endRef = useRef('');
  const headerRef = useRef('');
  const subheaderRef = useRef('');
  const bulletRef = useRef('');
  const { inputs } = INPUT_DEFINITIONS.education;
  inputs.startDate.ref = startRef;
  inputs.endDate.ref = endRef;
  inputs.header.ref = headerRef;
  inputs.subheader.ref = subheaderRef;
  inputs.bulletPoints.ref = bulletRef;

  // useHandleRefs(pageRefs);
  //todo: useTest(...education)
  useHandleGroupRef(EDUCATION);

  // const handleSubmit = (e) => {
  //   e?.preventDefault(); //prevent page refresh
  //   handleAction(name, inputRef.current.value);
  //   inputRef.current.value = '';
  //   inputRef.current.blur();
  // };

  const { education: educationSection } = relevantState;
  return (
    <>
      <article>
        <InputGroupWithActions name="education" editedSectionName={editedSectionName}/>
      </article>
      {educationSection?.map(el => {
        let isDisabled = editedSectionName !== null;
        return (
          <article key={el.item.id} className="entry-control-box">
            <ItemGroupWithActions
              name={EDUCATION}
              entry={el}
              handleToggleSelect={toggleSelect(dispatch)}
              handleEdit={editEntry(dispatch)}
              handleDelete={deleteEntry(dispatch)}
              disabled={isDisabled}
            />
          </article>
        );
      })}
    </>
  );
};

export default EducationPage;

//TODO: 20/12/2021 [x] Render items from state (90 min => 85 min)
//TODO: 20/12/2021 [] Handle refs for start date, end, header and subheader  (90 min)
