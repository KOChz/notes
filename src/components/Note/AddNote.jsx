import React, { useState, useRef, useLayoutEffect } from 'react'
import { animationTypes } from '../NotesList/NotesList'
import styles from './Note.module.scss'

const AddNote = ({ handleAddNote, handleToggleAnimation }) => {
  const [noteText, setNoneText] = useState('')
  const charLimit = 200

  const handleChange = (event) => {
    if (charLimit - event.target.value.length >= 0) {
      setNoneText(event.target.value)
    }
  }

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText)
      setNoneText('')
    }
  }

  const noteTextareaRef = useRef(null)
  //useLayoutEffect but not a useEffect cause input need to be rendered in DOM. useLayoutEffect works after rendering
  //and no need to use state
  useLayoutEffect(() => {
    noteTextareaRef.current.focus()
  }, [])

  return (
    <div className={styles.noteNew}>
      <textarea
        ref={noteTextareaRef}
        className={styles.newTextArea}
        rows="6"
        cols="10"
        value={noteText}
        placeholder="Type to add a note..."
        onChange={handleChange}
      ></textarea>
      <div className={styles.noteFooter}>
        <small>{charLimit - noteText.length} Remaining</small>
        <button
          className={styles.save}
          onClick={() => {
            handleSaveClick()
            handleToggleAnimation(animationTypes.ANIM_TYPE_ADD)
          }}
        >
          Save
        </button>
      </div>
    </div>
  )
}
export default AddNote
