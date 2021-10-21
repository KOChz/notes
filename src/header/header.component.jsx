import React from 'react'
import './header.styles.scss'
import './../note/note.styles.scss'

const Header = ({ handleNightMode }) => {
  return (
    <div className="header">
      <img
        className="img-note"
        src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-note-back-to-school-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"
        width="35"
        height="35"
      />
      <h1>Notes</h1>
    </div>
  )
}

export default Header
