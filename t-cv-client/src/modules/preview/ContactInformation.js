import React from 'react';
import { IoMail, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5';
import { ImPhone } from 'react-icons/im';
import { useRelevantStateAndDispatch } from '../resume/resumeCustomHooks';
import {
  EMAIL,
  GITHUB,
  LINKEDIN,
  PHONE,
  getSingleSelectedValue
} from '../resume/consts';

const ContactInformation = () => {
  const [relevantState] = useRelevantStateAndDispatch(PHONE, EMAIL, LINKEDIN, GITHUB);
  const { email, phone, linkedIn, gitHub } = relevantState;
  const userEmail = getSingleSelectedValue(email);
  const userPhone = getSingleSelectedValue(phone);
  const userLinkedIn = getSingleSelectedValue(linkedIn);
  const userGitHub = getSingleSelectedValue(gitHub);

  return (
    <article className="contact-information">
      {userEmail && <a href={`mailto:${userEmail}`}>
        <IoMail/>
        {userEmail}
      </a>}
      {userPhone && <a href={`tel:${userPhone}`}>
        <ImPhone/>
        {userPhone}
      </a>}
      {userLinkedIn && <a href={userLinkedIn}>
        <IoLogoLinkedin/>
        LinkedIn
      </a>}
      {userGitHub && <a href={userGitHub}>
        <IoLogoGithub/>
        GitHub
      </a>}
    </article>
  );
};

export default ContactInformation;
