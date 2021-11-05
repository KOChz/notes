import React from 'react'
import { MdSearch } from 'react-icons/md'
import styles from './SearchBar.modules.scss'

export const Search = ({ handleSearchNote }) => (
  <div class={styles.search}>
    <MdSearch className={styles.searchIcon} size="1.3em" />
    <input
      onChange={(event) => {
        handleSearchNote(event.target.value)
      }}
      type="search"
      placeholder="Search..."
      id="search-bar"
    />
  </div>
)
