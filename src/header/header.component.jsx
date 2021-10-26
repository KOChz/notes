import React from 'react'
import './header.styles.scss'
import './../note/note.styles.scss'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyles } from './../themes'

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`

const Header = ({ handleNightMode }) => {
  const [theme, setTheme] = React.useState('light')

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp className="header">
        <div className="logo-and-notes">
          <img
            className="img-note"
            src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-note-back-to-school-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"
            width="35"
            height="35"
          />
          <h1 className="notes">Notes</h1>
        </div>
        <button className="dark-mode" onClick={() => themeToggler()}>
          Change Theme
        </button>
      </StyledApp>
    </ThemeProvider>
  )
}

export default Header
