import React from 'react';
import { useRelevantStateAndDispatch } from '../resume/resumeCustomHooks';
import { getSingleSelectedValue, NAME, ROLE } from '../resume/consts';

const Header = () => {
  const [relevantState] = useRelevantStateAndDispatch(NAME, ROLE);
  const { name, role } = relevantState;
  const userName = getSingleSelectedValue(name);
  const jobTitle = getSingleSelectedValue(role);

  return (
    <article>
      {userName && <h1>{userName}</h1>}
      {jobTitle && <h2>{jobTitle}</h2>}
    </article>
  );
};

export default Header;
