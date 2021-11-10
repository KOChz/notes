import React, { useState } from 'react'
import Note from '../Note/Note'
import AddNote from '../Note/AddNote'
import AddNoteAnimation from '../../ui/animations/AddAnimation'
import DeleteNoteAnimation from '../../ui/animations/DeleteAnimation'
import styles from './NotesList.module.css'

const NoteList = ({
  notes,
  handleAddNote,
  handleDeleteNote,
  handleEditNote,
}) => {
  return (
    <div className={styles.notesList}>
      <AddNote handleAddNote={handleAddNote} />
      {notes.map((note) => (
        <Note
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
          handleEditNote={handleEditNote}
        />
      ))}
    </div>
  )
}

export default NoteList
