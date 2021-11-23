import { nanoid } from 'nanoid'
import { ADD_NOTE, DELETE_NOTE } from './actionTypes'

const date = new Date()

export const initialState = {
  notes: [
    {
      id: nanoid(),
      text: '',
      date: '',
    },
  ],
}

export default function notes(state = initialState, { type, payload }) {
  console.log(type)
  switch (type) {
    case ADD_NOTE: {
      const newNote = {
        text: payload,
        id: nanoid(),
        date: date.toLocaleDateString(),
      }
      return {
        ...state,
        notes: [...state.notes, newNote],
      }
    }
    case DELETE_NOTE: {
      const deletedNote = {
        text: payload,
        id: payload,
        date: date.toLocaleDateString(),
      }

      const deleteNote = (id) => deletedNote.filter((note) => note.id !== id)

      return {
        ...state,
        notes: [...state.notes, deleteNote],
      }
    }
    default:
      return state
  }
}
