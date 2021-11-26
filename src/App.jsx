import { useState, useEffect } from 'react'
import { Provider } from 'react-redux'
import { nanoid } from 'nanoid'
import Header from './components/Header'
import NoteList from './components/NotesList'
import Search from './components/SearchBar'
import reverseArray from './utils/ReverseArray'
import store from './redux/store'

import styles from './components/Note/Note.module.scss'
import './App.scss'

const App = () => {
  // const [notes, setNotes] = useState([
  //   {
  //     id: nanoid(),
  //     text: '',
  //     date: '',
  //   },
  // ])

  // const Sort = () => {
  //   const sortedNotes = notes
  //   setNotes(reverseArray([...sortedNotes]))
  // }

  // const [searchText, setSearchText] = useState('')
  // useEffect(() => {
  //   const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))
  //   if (savedNotes) {
  //     setNotes(savedNotes)
  //   }
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
  // }, [notes])

  // const addNote = (text) => {
  //   const date = new Date()
  //   const newNote = {
  //     text: text,
  //     date: date.toLocaleDateString(),
  //     id: nanoid(),
  //   }

  //   const newNotes = [...notes, newNote]
  //   setNotes(newNotes)
  // }

  // const deleteNote = (id) => {
  //   const newNotes = notes.filter((note) => note.id !== id)
  //   setNotes(newNotes)
  // }

  // const editNote = (editedNote) => {
  //   setNotes(
  //     notes.map((note) =>
  //       note.id === editedNote.id
  //         ? {
  //             ...note,
  //             ...editedNote,
  //           }
  //         : note
  //     )
  //   )
  // }

  return (
    <Provider store={store}>
      <div className={styles.addAnimation}>
        <div className="container">
          <Header />
          <Search />
          <NoteList
          // notes={notes.filter((note) =>
          //   note.text.toLowerCase().includes(searchText)
          // )}
          // handleAddNote={addNote}
          // handleDeleteNote={deleteNote}
          // handleEditNote={editNote}
          />
        </div>
      </div>
    </Provider>
  )
}

export default App
