import React, { useState } from 'react'
import { MdDeleteForever } from 'react-icons/md'

import styles from './Note.module.scss'

const Note = ({ id, text, date, handleDeleteNote, handleEditNote }) => {
  return (
    <div className={styles.note}>
      {id === handleEditNote.id ? (
        <div className="edit-note">
          <textarea rows="6" cols="10" value={text}></textarea>
        </div>
      ) : (
        <span className={styles.noteText}>{text}</span>
      )}

      <div className={styles.noteFooter}>
        <small>{date}</small>
        <div className={styles.footerIcons}>
          <img
            className="edit-icon"
            src="https://img.icons8.com/color/48/000000/edit--v2.png"
            alt="Editing icon"
            width="18"
            height="18"
            onClick={() => {
              handleEditNote(id)
            }}
          />
          <MdDeleteForever
            className={styles.deleteIcon}
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
