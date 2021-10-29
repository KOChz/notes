import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import './App.css'
import Header from './header/header.component'
import NoteList from './notes-list/notes-list.component'
import { Search } from './search-bar/search-bar.component'

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: '',
      date: '',
    },
  ])

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

  const editNote = (id, text) => {
    const editedNote = {
      text: text,
      id: nanoid(),
    }

    const editedNotes = [...notes, editedNote]
    setNotes(editedNotes)
  }

  return (
    <div className="container">
      <Header />
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
  )
}

// commet1

export default App
