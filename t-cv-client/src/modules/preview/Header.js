import React from 'react';
import { useRelevantStateAndDispatch } from '../resume/resumeCustomHooks';
import { SIMPLE_INPUT_DEFS } from '../resume/consts';
import { getSingleSelectedValue } from '../utils';

const NAME = SIMPLE_INPUT_DEFS.name.name;
const ROLE = SIMPLE_INPUT_DEFS.role.name;

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
