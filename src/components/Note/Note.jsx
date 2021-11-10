import React, { useState, useRef, useLayoutEffect } from 'react'
import { MdDeleteForever, MdCheck } from 'react-icons/md'
import AddNoteAnimation from '../../ui/animations/AddAnimation'
import DeleteNoteAnimation from '../../ui/animations/DeleteAnimation'
import styles from './Note.module.scss'

const Note = ({ id, text, date, handleDeleteNote, handleEditNote }) => {
  const [isDeleted, setIsDeleted] = useState(false)
  const AnimationType = !isDeleted ? DeleteNoteAnimation : AddNoteAnimation

  const handleToggleAnimation = () => setIsDeleted(!isDeleted)

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

  return (
    <AnimationType>
      <div className={styles.note}>
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
                src="https://img.icons8.com/color/48/000000/edit--v2.png"
                alt="Editing icon"
                width="18"
                height="18"
                onClick={handleToggleEdit}
              />
            ) : (
              <MdCheck
                className="delete-icon"
                size="1.2em"
                onClick={onNoteSave}
              />
            )}
            <MdDeleteForever
              className={styles.deleteIcon}
              size="1.2em"
              onClick={() => {
                handleDeleteNote(id)
                handleToggleAnimation()
              }}
            />
          </div>
        </div>
      </div>
    </AnimationType>
  )
}

export default Note
