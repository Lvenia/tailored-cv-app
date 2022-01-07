import React from 'react';
import {BsFileEarmarkPerson} from 'react-icons/bs'
import { getSingleSelectedValue, SUMMARY } from '../resume/consts';
import { useRelevantStateAndDispatch } from '../resume/resumeCustomHooks';

const Summary = () => {
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
