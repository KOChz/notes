import React from 'react'
import { connect } from 'react-redux'
import Note from '../Note/Note'
import AddNote from '../Note/AddNote'
import {
  addNoteAction,
  deleteNoteAction,
  editNoteAction,
} from '../../redux/notes/actions'

import styles from './NotesList.module.scss'

const NoteList = ({
  notes,
  addNoteAction,
  deleteNoteAction,
  editNoteAction,
}) => {
  console.log(notes, 'notes')
  return (
    <div className={styles.notesList}>
      <AddNote handleAddNote={addNoteAction} />
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={deleteNoteAction}
          handleEditNote={editNoteAction}
        />
      ))}
    </div>
  )
}

const mapStateToProps = (state) => ({
  notes: state.notes || [],
})

const mapDispatchToProps = (dispatch) => ({
  addNoteAction: (text) => dispatch(addNoteAction(text)),
  deleteNoteAction: (id) => dispatch(deleteNoteAction(id)),
  editNoteAction: (id) => dispatch(editNoteAction(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NoteList)
