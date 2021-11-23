import { createStore, combineReducers } from 'redux'
import notes from './notes/reducer'

// const rootReducer = combineReducers({
//   notes
// });

console.log('notes', notes)

export default createStore(notes)
