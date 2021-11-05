import React from 'react'
import styles from './Header.module.scss'

const Header = () => (
  <div className={styles.header}>
    <div className={styles.logoAndNotes}>
      <img
        className={styles.imgNote}
        src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-note-back-to-school-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"
        width="35"
        height="35"
      />
      <h1 className={styles.notes}>Notes</h1>
    </div>
    <button className={styles.darkMode}>Switch Theme</button>
  </div>
)

export default Header
