import styles from './Header.module.scss'
export const Logo = () => (
  <img
    src="https://img.icons8.com/doodle/192/000000/apple-notes.png"
    className={styles.imgNote}
    width="45"
    height="45"
    alt="Logo"
  />
)

export const SortIcon = ({ click }) => (
  <img
    src="https://img.icons8.com/pastel-glyph/192/000000/generic-sorting.png"
    alt="Sort Icon"
    className={styles.button}
    onClick={click}
  />
)

export const ThemeTogglerIcon = ({ click }) => (
  <img
    className={styles.button}
    src="https://img.icons8.com/ios/192/000000/day-and-night.png"
    onClick={click}
    alt="Theme Toggler"
  />
)
