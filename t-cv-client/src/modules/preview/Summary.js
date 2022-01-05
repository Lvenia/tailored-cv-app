import React from 'react';
import { getSingleSelectedValue, SUMMARY } from '../resume/consts';
import { useRelevantStateAndDispatch } from '../resume/resumeCustomHooks';

const Summary = () => {
  const [relevantState] = useRelevantStateAndDispatch(SUMMARY);
  const { summary } = relevantState;
  const resumeSummary = getSingleSelectedValue(summary);
  return (
    <article>
      <p>{resumeSummary}</p>
    </article>
  );
};

export default Summary;
