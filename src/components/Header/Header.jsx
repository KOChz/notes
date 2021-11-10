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
            className={styles.imgNote}
            src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-note-back-to-school-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"
            width="35"
            height="35"
          />
          <h1 className={styles.notes}>Notes</h1>
        </div>
        <button className={styles.darkMode} onClick={() => themeToggler()}>
          Switch Theme
        </button>
      </StyledApp>
    </ThemeProvider>
  )
}

export default Header
