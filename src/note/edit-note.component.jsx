import React from 'react'
import { useState } from 'react'
import './../note/note.styles.scss'

const EditNote = ({ handleEditNote }) => {
  const [noteText, setNoneText] = useState('')
  const charLimit = 200

  const handleChange = (event) => {
    if (charLimit - event.target.value.length >= 0) {
      setNoneText(event.target.value)
    }
  }

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleEditNote(noteText)
      setNoneText('')
    }
  }

  return (
    <div className="note new">
      <textarea
        rows="6"
        cols="10"
        value={noteText}
        placeholder={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{charLimit - noteText.length} Remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  )
}

export default EditNote
