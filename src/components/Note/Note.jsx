import React, { useState, useRef, useLayoutEffect, useEffect } from 'react'
import { MdDeleteForever, MdCheck } from 'react-icons/md'
import classnames from 'classnames'
import IsEditingNote from './IsEditingNote'
import { AnimationTypes } from '../../constants/AnimationTypes'
import EditingIcon from './EditingIcon'
import { connect, useSelector, useDispatch, shallowEqual } from 'react-redux'
import { deleteNoteAction } from '../../redux/notes/actions'

import styles from './Note.module.scss'

const Note = ({ id, text, date, handleDeleteNote, handleEditNote }) => {
  const [animType, setAnimType] = useState(AnimationTypes.ANIM_TYPE_ADD)

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
        <IsEditingNote
          formalClassName={styles.editNote}
          formalRef={noteTextareaRef}
          formalOnChange={handleTextChange}
          formalValue={newText}
        />
      ) : (
        <span className={styles.noteText}>{text}</span>
      )}
      <div className={styles.noteFooter}>
        <small>{date}</small>
        <div className={styles.footerIcons}>
          {!isEdit ? (
            <EditingIcon
              formalClassName={styles.editIcon}
              formalOnClick={handleToggleEdit}
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
              setAnimType(AnimationTypes.ANIM_TYPE_DELETE)
              setTimeout(() => handleDeleteNote(id), 500)
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Note
