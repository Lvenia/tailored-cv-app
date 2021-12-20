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
import { addEntry, dropChanges, saveChanges } from './actionHandlers';
import { useEditedSection, useHandleRefs, useRelevantStateAndDispatch } from './resumeCustomHooks';
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
  const bulletRef = useRef('HELLO');
  const { inputs } = INPUT_DEFINITIONS.education;
  inputs.start.ref = startRef;
  inputs.end.ref = endRef;
  inputs.header.ref = headerRef;
  inputs.subheader.ref = subheaderRef;
  inputs.bullets.ref = bulletRef;

  // useHandleRefs(pageRefs);
  //todo: useTest(...education)

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
        <InputGroupWithActions name="education"/>
      </article>
      {educationSection?.map(el => {
        return (
          <article className="entry-control-box">
            <ItemGroupWithActions
              entry={el}
              handleToggleSelect={() => console.log('handleToggleSelect')}//todo
              handleEdit={() => console.log('handleEdit')}//todo
              handleDelete={() => console.log('handleDelete')}//todo
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
