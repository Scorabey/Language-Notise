import Note from '@/widgets'
import { NotesProvider } from '../shared/model/context/NotesContext'
import './global.scss'

export const App = () => {

  return (
    <NotesProvider>
      <h1 className='visually-hidden'>Language Notese</h1>
      <Note/>
    </NotesProvider>
  )
}

export default App
