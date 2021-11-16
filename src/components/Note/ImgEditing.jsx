import React from 'react'
import styles from './Note.module.scss'

const ImgEditing = (handleToggleEdit) => (
  <img
    className={styles.editIcon}
    src="https://img.icons8.com/material-sharp/50/000000/edit--v1.png"
    alt="Editing icon"
    width="18"
    height="17"
    onClick={handleToggleEdit}
  />
)

export default ImgEditing
