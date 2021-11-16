import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import Header from './components/Header'
import NoteList from './components/NotesList'
import Search from './components/SearchBar'
import classnames from 'classnames'
import styles from './components/Note/Note.module.scss'
import './App.scss'

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: '',
      date: '',
    },
  ])

  const reverseArray = (array) => {
    const reversedArray = array.reverse()
    return reversedArray
  }

  const Sort = () => {
    const sortedNotes = notes
    setNotes(reverseArray([...sortedNotes]))
  }

  const [searchText, setSearchText] = useState('')
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))
    if (savedNotes) {
      setNotes(savedNotes)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
  }, [notes])

  const addNote = (text) => {
    const date = new Date()
    const newNote = {
      text: text,
      date: date.toLocaleDateString(),
      id: nanoid(),
    }

    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }

  const editNote = (editedNote) => {
    setNotes(
      notes.map((note) =>
        note.id === editedNote.id
          ? {
              ...note,
              ...editedNote,
            }
          : note
      )
    )
  }

  return (
    <div className={styles.addAnimation}>
      <div className="container">
        <Header handleSort={Sort} />
        <Search handleSearchNote={setSearchText} />
        <NoteList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          handleEditNote={editNote}
        />
      </div>
    </div>
  )
}

export default App
