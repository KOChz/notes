import React from 'react'
import { useState } from 'react'
import styles from './Note.modules.scss'

const AddNote = ({ handleAddNote }) => {
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

  return (
    <div className={styles.noteNew}>
      <textarea
        rows="6"
        cols="10"
        value={noteText}
        placeholder="Type to add a note..."
        onChange={handleChange}
      ></textarea>
      <div className={styles.noteFooter}>
        <small>{charLimit - noteText.length} Remaining</small>
        <button className={styles.save} onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  )
}
export default AddNote
