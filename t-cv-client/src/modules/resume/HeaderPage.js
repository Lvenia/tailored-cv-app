import React, { useRef, useContext } from 'react';
import { AppContext } from "../../App";

const ADD_ENTRY = "ADD_ENTRY";

const TextInputWithAdd = ({
  name,
  type,
  label,
  inputRef,
  handleAdd,
}) => {

  const handleClick = (e) => {
    e.preventDefault(); //prevent page refresh
    handleAdd(name, inputRef.current.value);
    inputRef.current.value="";
    inputRef.current.blur();
  }

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        ref={inputRef}
        onKeyDown={e => e.key === 'Enter' && handleClick(e)}
      />
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

const HeaderPage = () => {
  const { state, dispatch } = useContext(AppContext);
  const nameRef = useRef("");
  const roleRef = useRef("");

  const handleAdd = (name, value) => {
    dispatch({type: ADD_ENTRY, payload: {name, value}})
  }

  return (
    <div>
      <fieldset>
        <legend>CV Header</legend>
        <TextInputWithAdd name="name" type="text" label="Name:" inputRef={nameRef} handleAdd={handleAdd}/>
        <TextInputWithAdd name="role" type="text" label="Role:" inputRef={roleRef} handleAdd={handleAdd}/>
      </fieldset>
      <h1>Name: {state.name}</h1>
      <h1>Role: {state.role}</h1>
    </div>
  )
}

export default HeaderPage;
