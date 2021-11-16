import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyles } from '../../ui/themes'
import styles from './Header.module.scss'

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`

const Header = ({ handleSort }) => {
  const [theme, setTheme] = useState('light')

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp className={styles.header}>
        <div className={styles.logoAndNotes}>
          <img
            src="https://img.icons8.com/doodle/192/000000/apple-notes.png"
            className={styles.imgNote}
            width="45"
            height="45"
            alt="Logo"
          />
          <h1 className={styles.notes}>Notes</h1>
        </div>
        <div className={styles.themeAndSort}>
          <img
            src="https://img.icons8.com/pastel-glyph/192/000000/generic-sorting.png"
            alt="Sort Icon"
            className={styles.button}
            onClick={() => handleSort()}
          />
          <img
            className={styles.button}
            src="https://img.icons8.com/ios/192/000000/day-and-night.png"
            onClick={themeToggler}
            alt="Theme Toggler"
          />
        </div>
      </StyledApp>
    </ThemeProvider>
  )
}

export default Header
