export const ENTER = 'Enter';
export const ADD_ENTRY = 'ADD_ENTRY';
export const HEADER = 'CV Header';

export const generateId = () => {
  return new Date().getTime().toString(); //temporary solution
}