import { nanoid } from 'nanoid'
import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE } from './actionTypes'

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
      return {
        notes: state.notes.filter((note) => note.id !== payload),
      }
    }
    case EDIT_NOTE: {
      const editedNote = {
        text: payload,
      }
      return {
        notes: state.notes.map((note) =>
          note.id === state.notes.id
            ? {
                ...state,
                notes: [...state.notes, editedNote],
              }
            : state
        ),
      }
    }
    default:
      return state
  }
}
