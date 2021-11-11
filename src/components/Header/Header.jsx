import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyles } from '../../ui/themes'
import styles from './Header.module.scss'

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`

const Header = () => {
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
            src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/000000/external-note-documents-icongeek26-linear-colour-icongeek26.png"
            className={styles.imgNote}
            width="40"
            height="40"
            alt="Logo"
          />
          <h1 className={styles.notes}>Notes</h1>
        </div>
        <img
          className={styles.darkMode}
          src="https://img.icons8.com/ios/50/000000/day-and-night.png"
          onClick={() => themeToggler()}
          alt="Theme Toggler"
        />
      </StyledApp>
    </ThemeProvider>
  )
}

export default Header
