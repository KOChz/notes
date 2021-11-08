import React, { useState } from 'react'
import { MdDeleteForever, MdCheck } from 'react-icons/md'
import { AddNoteAnimation } from '../../animations/AddAndDeleteNoteAnimation'
import styles from './Note.module.scss'

const Note = ({ id, text, date, handleDeleteNote, handleEditNote }) => {
  const [isEdit, setIsEdit] = useState(false)
  const [newText, setNewText] = useState('')

  const handleToggleEdit = () => {
    if (!isEdit) {
      setNewText(text)
    }
    setIsEdit(!isEdit)
  }

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

  const noteTextareaRef = React.useRef(null)

  //useLayoutEffect but not a useEffect cause input need to be rendered in DOM. useLayoutEffect works after rendering
  React.useLayoutEffect(() => {
    if (isEdit) noteTextareaRef.current.focus()
  }, [isEdit])

  return (
    <AddNoteAnimation>
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
              onClick={() => handleDeleteNote(id)}
            />
          </div>
        </div>
      </div>
    </AddNoteAnimation>
  )
}

export default Note
