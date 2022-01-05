import React from 'react';
import { useRelevantStateAndDispatch } from '../resume/resumeCustomHooks';
import { EMAIL, getSingleSelectedValue, GITHUB, LINKEDIN, PHONE } from '../resume/consts';

const ContactInformation = () => {
  const [relevantState] = useRelevantStateAndDispatch(PHONE, EMAIL, LINKEDIN, GITHUB);
  const { email, phone, linkedIn, gitHub } = relevantState;
  const userEmail = getSingleSelectedValue(email);
  const userPhone = getSingleSelectedValue(phone);
  const userLinkedIn = getSingleSelectedValue(linkedIn);
  const userGitHub = getSingleSelectedValue(gitHub);

  return (
    <article className="contact-information">
      <span>
                <h6>E-mail:</h6>
                <a href={`mailto:${userEmail}`}>{userEmail}</a>
            </span>
      <span>
                <h6>Phone:</h6>
                <a href={`tel:${userPhone}`}>{userPhone}</a>
            </span>
      <span>
                <h6>LinkedIn</h6>
                <a href={userLinkedIn}>LinkedIn</a>
            </span>
      <span>
                <h6>github</h6>
                <a href={userGitHub}>GitHub</a>
            </span>
    </article>
  );
};

export default ContactInformation;
