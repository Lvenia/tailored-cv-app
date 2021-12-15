# tailored-cv-app
# client side 
project setup: create-react-app
client side routing with react-router-dom
idea: ATS (Applicant Tracking System) Compliant PreviewPage + quick adjust of the content
global state without state management library as Redux: 
concluded, that React Context Provider and useContext hook is more suitable solution for this app than props drilling or passing children as props
global state is a single source of truth (new entries and selected id\'s are dispatched to state, history and selected are rendered from state) => if state changes => DOM updates;
instead of calling useContext in each component in resume section, destructuring state and dispatch, defining editedsectionName and isEdited used custom hooks that return only necessary part of state as well ad dispatch (may get changed later on), edited section name and isedited. so we avoid to export AppContext and useContext to each page.
