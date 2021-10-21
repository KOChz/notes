import React from 'react'
import { MdDeleteForever } from 'react-icons/md'
import './note.styles.scss'

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          className="delete-icon"
          size="1.2em"
          onClick={() => {
            handleDeleteNote(id)
          }}
        />
      </div>
    </div>
  )
}

export default Note
