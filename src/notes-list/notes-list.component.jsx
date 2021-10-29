import React from 'react'
import './notes-list.styles.css'
import Note from '../note/note.component'
import AddNote from '../note/add-note.component'

// comment2

const NoteList = ({
  notes,
  handleAddNote,
  handleDeleteNote,
  handleEditNote,
}) => {
  return (
    <div className="notes-list">
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
