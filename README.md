# Web Application "Tailored CV" 

A tool for fast resume modification. Intended as an opportunity to improve knowledge of React Ecosystem and learn the basics of backend development with Node.js and Express.js. 

---
### Technical Keys

* single-page React application based on React hooks;
* state management with useReducer and React Context Provider;
* routing with React Router v6, nested routes;
* CRUD (create-read-update-delete) functionality;

### Idea

  * single-page resume printable in Preview section;
  * resume entries managed in Resume Settings section:
    * Create Read Update Delete entries and group of entries;
    * select / unselect entries to be shown in preview;
    
### Notes:

  * project setup: create-react-app;
  * build based on functional components to learn better React hooks;
  * learn React Router v6, implement nested routes;
  * add complexity carefully, only if necessary:
    * state logic with useReducer instead of state management library as Redux;
    * initial state passed to useReducer is a single source of truth;
    * React Context Provider to avoid props drilling;
    * useRef and useLayoutEffect hook to manage input values (implemented out of curiosity, possible that useState + debounce to avoid re-rendering on each keystroke will be eventually better solution)
    * resumeCustomHooks allow avoiding in each page of Resume Settings section:
      * importing AppContext and useContext;
      * calling useContext, destructuring state and dispatch;
      * defining editedsectionName and isEdited;
      
--- 

### Plan

###### Stage 1.

Goal: able to print resume even though the information is collected in mockData object. Control over resume content by means of select/unselect buttons.

  * [x] implement routing
  * [ ] create mockData object which eventually will become a schema prototype;
  * Resume Preview Section:
    * [x] basic markup (sections and layout);
    * [x] @media rules for printing from the browser as A4;
    * [ ] render data from the global state;
    * [ ] add formatting;
  * Resume Settings section:
    * [X] initial logic (CRUD + select) and styles for Header section (one entry = one input);
    * [X] initial Contact Information section;
    * [X] initial Resume Summary section;
    * [ ] initial Education section (one entry = multiple inputs);
      * [X] state structure 
      * [X] add new entry
      * [ ] edit/delete bullets before submit
      * [x] select/unselect entry
      * [x] delete entry
      * [x] render entries
      * [ ] edit entries:
        * [x] edit single inputs
        * [ ] edit bullets
    * [ ] initial Experience section based on Education section;
    * [ ] initial Certificates section;
    * [ ] initial Skills section;
  
---
###### Stage 2.

Goal: deploy front end
* [ ] add basic validation for inputs
* [ ] fix crud buttons' display
* [ ] move state to local storage
* [ ] deploy as web page

---
###### Stage 3.
Goal: figure out how to build back end, make plan, implement

---
###### Stage 4.
Goal: combine front and back, deploy as web app

---
###### Stage 5.
Goal: make prettier with MATERIAL-UI, add landing page 
