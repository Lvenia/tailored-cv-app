import React from 'react';
import { BsFileEarmarkPerson } from 'react-icons/bs';
import { SIMPLE_INPUT_DEFS } from '../resume/consts';
import { getSingleSelectedValue } from '../utils';
import { useRelevantStateAndDispatch } from '../resume/resumeCustomHooks';

const Summary = () => {
  const SUMMARY = SIMPLE_INPUT_DEFS.summary.name;
  const [relevantState] = useRelevantStateAndDispatch(SUMMARY);
  const { summary } = relevantState;
  const resumeSummary = getSingleSelectedValue(summary);

  return resumeSummary ? (
    <article>
      <h3>
        <BsFileEarmarkPerson/>
        Profile
      </h3>
      <p>{resumeSummary}</p>
    </article>
  ) : null;
};

export default Summary;
