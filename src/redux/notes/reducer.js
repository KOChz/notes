import { nanoid } from 'nanoid'
import {
  ADD_NOTE,
  DELETE_NOTE,
  EDIT_NOTE,
  SORT_NOTE,
  SEARCH_NOTE,
} from './actionTypes'

const date = new Date()

export const initialState = {
  notes: [],
}

export default function notes(state = initialState, { type, payload }) {
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
        ...state,
        notes: state.notes.filter((note) => note.id !== payload),
      }
    }
    case EDIT_NOTE: {
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === payload.id
            ? {
                ...note,
                text: payload.text,
              }
            : note
        ),
      }
    }
    case SORT_NOTE: {
      return {
        ...state,
        notes: [...state.notes].reverse(),
      }
    }
    case SEARCH_NOTE: {
      return {
        ...state,
      }
    }
    default:
      return state
  }
}
