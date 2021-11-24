import React, { useRef, useContext, useState } from 'react';
import { AppContext } from "../../App";
import TextInputWithActions from "./TextInputWithActions";
import { ADD_ENTRY, HEADER, generateId } from './consts';

//TODO: use TextInputWithActions instead
const TextInputRUD = ({ id, type, content, readOnly }) => {
  const [select, setSelect] = useState(false);
  return (
    <div className="control">
      <button
        style={{backgroundColor: select && "green"}}
        onClick={() => setSelect(!select)}
      >
        S
      </button>
      <button>E</button>
      <button>D</button>
      <input
        id={id}
        type={type}
        value={content}
        readOnly={readOnly}
      />
    </div>
  )
}

const HeaderPage = () => {
  const { state, dispatch } = useContext(AppContext);
  const nameRef = useRef("");
  const roleRef = useRef("");

  const addEntry = (name, value) => {
    dispatch({ type: ADD_ENTRY, payload: { id: generateId(), name, value } })
  }

  const renderItems = (items) => {
    return items.map(item => {
      const { id, value } = item;
      return <TextInputRUD key={id} id={id} content={value} readOnly={true} type="text"/>
    })
  }

  //TODO: put some thoughts in return (consts, separate component?)
  return (
    <>
      <article>
        <fieldset>
          <legend>{HEADER}</legend>
          <TextInputWithActions name="name" type="text" label="Name:" inputRef={nameRef} addEntry={addEntry}/>
          <TextInputWithActions name="role" type="text" label="Role:" inputRef={roleRef} addEntry={addEntry}/>
        </fieldset>
      </article>
      <article className="control">
        <fieldset>
          <legend>Name Field Control</legend>
          {renderItems(state.name)}
        </fieldset>
      </article>
      <article className="control">
        <fieldset>
          <legend>Role Field Control</legend>
          {renderItems(state.role)}
        </fieldset>
      </article>
    </>
  )
}

export default HeaderPage;
