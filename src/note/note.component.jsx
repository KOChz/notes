import React from 'react'
import { MdDeleteForever } from 'react-icons/md'
import { useState } from 'react'
import './note.styles.scss'

const Note = ({ id, text, date, handleDeleteNote, handleEditNote }) => {
  return (
    <div className="note">
      {id === handleEditNote.id ? (
        <div className="edit-note">
          <textarea rows="6" cols="10" value={text}></textarea>
        </div>
      ) : (
        <span className="note-text">{text}</span>
      )}

      <div className="note-footer">
        <small>{date}</small>
        <div className="footer-icons">
          <img
            className="edit-icon"
            src="https://img.icons8.com/color/48/000000/edit--v2.png"
            // saasd
            // comment3
            alt="Editing icon"
            width="18"
            height="18"
            onClick={() => {
              handleEditNote(id)
            }}
          />
          <MdDeleteForever
            className="delete-icon"
            size="1.2em"
            onClick={() => {
              handleDeleteNote(id)
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Note
