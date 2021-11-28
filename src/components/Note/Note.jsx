import React, { useState, useRef, useLayoutEffect, useEffect } from 'react'
import { MdDeleteForever, MdCheck } from 'react-icons/md'
import classnames from 'classnames'
import IsEditingNote from './IsEditingNote'
import { AnimationTypes } from '../../constants/AnimationTypes'
import EditingIcon from './EditingIcon'
import styles from './Note.module.scss'
import { editNoteAction } from '../../redux/notes/actions'
import { connect } from 'react-redux'

const Note = ({ id, text, date, handleDeleteNote, editNoteAction }) => {
  const [animType, setAnimType] = useState(AnimationTypes.ANIM_TYPE_ADD)
  const [newText, setNewText] = useState(text)
  const [isEdit, setIsEdit] = useState(false)
  const noteTextareaRef = useRef(null)
  console.log(newText, 'new fucking text')
  const handleToggleEdit = () => {
    setIsEdit(!isEdit)
  }

  const handleTextChange = (e) => {
    setNewText(e.target.value)
  }

  const onNoteSave = () => {
    editNoteAction(id, newText)
    handleToggleEdit()
  }

  //useLayoutEffect but not a useEffect cause input need to be rendered in DOM. useLayoutEffect works after rendering
  useLayoutEffect(() => {
    if (isEdit) noteTextareaRef.current.focus()
  }, [isEdit])

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

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  editNoteAction: (id, text) => dispatch(editNoteAction(id, text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Note)
