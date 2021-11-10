import React, { useState } from 'react'
import Note from '../Note/Note'
import AddNote from '../Note/AddNote'
import AddNoteAnimation from '../../ui/animations/AddAnimation'
import DeleteNoteAnimation from '../../ui/animations/DeleteAnimation'
import styles from './NotesList.module.css'

export const animationTypes = {
  ANIM_TYPE_DELETE: DeleteNoteAnimation,
  ANIM_TYPE_ADD: AddNoteAnimation,
  DEFAULT: 'div',
}

const NoteList = ({
  notes,
  handleAddNote,
  handleDeleteNote,
  handleEditNote,
}) => {
  const [animType, setAnimType] = useState(animationTypes.DEFAULT)
  const AnimationType = animType
  console.log(AnimationType, animType)
  const handleToggleAnimation = (type) => setAnimType(type)

  return (
    <div className={styles.notesList}>
      <AddNote
        handleAddNote={handleAddNote}
        handleToggleAnimation={handleToggleAnimation}
      />
      {notes.map((note) => (
        <AnimationType>
          <Note
            id={note.id}
            text={note.text}
            date={note.date}
            handleDeleteNote={handleDeleteNote}
            handleEditNote={handleEditNote}
            handleToggleAnimation={handleToggleAnimation}
          />
        </AnimationType>
      ))}
    </div>
  )
}

export default NoteList
