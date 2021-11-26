import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import Note from '../Note/Note'
import AddNote from '../Note/AddNote'
import { addNoteAction, deleteNoteAction } from '../../redux/notes/actions'

import styles from './NotesList.module.scss'

const NoteList = ({ Notes, addNoteAction, deleteNoteAction }) => {
  console.log(Notes)
  // alternative
  // const notes = useSelector((store) => store.notes)
  // const dispatch = useDispatch()
  // handleAddNote = (text) => {
  //   dispatch(addNote(text))
  // }

  return (
    <div className={styles.notesList}>
      <AddNote handleAddNote={addNoteAction} />
      {/* here is an action of adding note */}

      {Notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={deleteNoteAction}
          // handleEditNote={handleEditNote}
        />
      ))}
    </div>
  )
}

const mapStateToProps = (state) => ({
  Notes: state.notes || [],
})

const mapDispatchToProps = (dispatch) => ({
  addNoteAction: (text) => dispatch(addNoteAction(text)),
  deleteNoteAction: (id) => dispatch(deleteNoteAction(id)),
})

// const mapDispatchToProps = {
//   addNoteAction,
// }

export default connect(mapStateToProps, mapDispatchToProps)(NoteList)
