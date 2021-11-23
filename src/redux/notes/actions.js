import { ADD_NOTE, DELETE_NOTE } from './actionTypes'

export const addNoteAction = (text) => ({
  type: ADD_NOTE,
  payload: text,
})

export const deleteNoteAction = (id) => ({
  type: DELETE_NOTE,
  payload: id,
})
