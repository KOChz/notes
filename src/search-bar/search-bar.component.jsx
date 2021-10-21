import React from 'react'
import { MdSearch } from 'react-icons/md'
import './search-bar.styles.scss'

export const Search = ({ handleSearchNote }) => (
  <div class="search">
    <MdSearch className="search-icon" size="1.3em" />
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
