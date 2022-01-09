import React from 'react';
import { IoMail, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5';
import { ImPhone } from 'react-icons/im';
import { useRelevantStateAndDispatch } from '../resume/resumeCustomHooks';
import {
  EMAIL,
  GITHUB,
  LINKEDIN,
  PHONE
} from '../resume/consts';
import { getSingleSelectedValue } from '../utils';

const ContactInformation = () => {
  const [relevantState] = useRelevantStateAndDispatch(PHONE, EMAIL, LINKEDIN, GITHUB);
  const { email, phone, linkedIn, gitHub } = relevantState;
  const userEmail = getSingleSelectedValue(email);
  const userPhone = getSingleSelectedValue(phone);
  const userLinkedIn = getSingleSelectedValue(linkedIn);
  const userGitHub = getSingleSelectedValue(gitHub);

  return (
    <article className="contact-information">
      {userEmail && <li><a href={`mailto:${userEmail}`}>
        <IoMail/>
        {userEmail}
      </a></li>}
      {userPhone && <li><a href={`tel:${userPhone}`}>
        <ImPhone/>
        {userPhone}
      </a></li>}
      {userLinkedIn && <li><a href={userLinkedIn}>
        <IoLogoLinkedin/>
        LinkedIn
      </a></li>}
      {userGitHub && <li><a href={userGitHub}>
        <IoLogoGithub/>
        GitHub
      </a></li>}
    </article>
  );
};

export default ContactInformation;
