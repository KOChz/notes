import { createGlobalStyle } from 'styled-components'

export const lightTheme = {
  body: '#fff',
}

export const darkTheme = {
  body: '#282828',
}

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body};
  }`
