import React, { useState, useRef, useLayoutEffect, useEffect } from 'react'
import { MdDeleteForever, MdCheck } from 'react-icons/md'
import EditingNote from './ImgEditing'
import styles from './Note.module.scss'
import classnames from 'classnames'

const animationTypes = {
  ANIM_TYPE_DELETE: 'deleteAnimation',
  ANIM_TYPE_ADD: 'addAnimation',
}

const Note = ({ id, text, date, handleDeleteNote, handleEditNote }) => {
  const [animType, setAnimType] = useState(animationTypes.ANIM_TYPE_ADD)

  const [isEdit, setIsEdit] = useState(false)
  const handleToggleEdit = () => {
    if (!isEdit) {
      setNewText(text)
    }
    setIsEdit(!isEdit)
  }

  const [newText, setNewText] = useState('')
  const handleTextChange = (e) => {
    setNewText(e.target.value)
  }

  const onNoteSave = () => {
    handleToggleEdit()
    handleEditNote({
      id,
      date,
      text: newText,
    })
  }

  const noteTextareaRef = useRef(null)
  //useLayoutEffect but not a useEffect cause input need to be rendered in DOM. useLayoutEffect works after rendering
  useLayoutEffect(() => {
    if (isEdit) noteTextareaRef.current.focus()
  }, [isEdit])

  useEffect(() => {
    return () => {}
  }, [])

  return (
    <div className={classnames(styles.note, styles[animType])}>
      {isEdit ? (
        <div>
          <textarea
            ref={noteTextareaRef}
            className={styles.editNote}
            onChange={handleTextChange}
            rows="6"
            cols="36"
            value={newText}
          />
        </div>
      ) : (
        <span className={styles.noteText}>{text}</span>
      )}
      <div className={styles.noteFooter}>
        <small>{date}</small>
        <div className={styles.footerIcons}>
          {!isEdit ? (
            <img
              className={styles.editIcon}
              src="https://img.icons8.com/material-sharp/50/000000/edit--v1.png"
              alt="Editing icon"
              width="18"
              height="17"
              onClick={handleToggleEdit}
            />
          ) : (
            <MdCheck
              className={styles.deleteIcon}
              size="1.4em"
              onClick={onNoteSave}
            />
          )}
          <MdDeleteForever
            className={styles.deleteIcon}
            size="1.2em"
            onClick={() => {
              setAnimType(animationTypes.ANIM_TYPE_DELETE)
              setTimeout(() => handleDeleteNote(id), 500)
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Note
