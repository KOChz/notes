import {
  ADD_NOTE,
  DELETE_NOTE,
  EDIT_NOTE,
  SORT_NOTE,
  SEARCH_NOTE,
} from './actionTypes'

export const addNoteAction = (text) => ({
  type: ADD_NOTE,
  payload: text,
})

export const deleteNoteAction = (id) => ({
  type: DELETE_NOTE,
  payload: id,
})

export const editNoteAction = (id, text) => ({
  type: EDIT_NOTE,
  payload: {
    id,
    text,
  },
})

export const sortNoteAction = (notes) => ({
  type: SORT_NOTE,
  payload: notes,
})

export const searchNoteAction = (text) => ({
  type: SEARCH_NOTE,
  payload: text,
})
