import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyles } from '../../ui/themes'
import { Logo, SortIcon, ThemeTogglerIcon } from './Icons.js'
import { sortNoteAction } from '../../redux/notes/actions'
import { connect } from 'react-redux'
import styles from './Header.module.scss'

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`

const Header = ({ sortNoteAction }) => {
  const [theme, setTheme] = useState('light')

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp className={styles.header}>
        <div className={styles.logoAndNotes}>
          <Logo />
          <h1 className={styles.notes}>Notes</h1>
        </div>
        <div className={styles.themeAndSort}>
          <SortIcon click={sortNoteAction} />
          <ThemeTogglerIcon click={themeToggler} />
        </div>
      </StyledApp>
    </ThemeProvider>
  )
}

// const mapStateToProps = (state) => ({
//   reduxNotes: state.notes || [],
// })

const mapDispatchToProps = (dispatch) => ({
  sortNoteAction: (notes) => dispatch(sortNoteAction(notes)),
})

export default connect(null, mapDispatchToProps)(Header)
