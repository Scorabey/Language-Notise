import { NotesContext } from '@/shared/model/context/NotesContext'
import { memo, useContext } from 'react'
import './Add.scss'

export const Add = (props) => {
  const { placeholder, id, isDisabled, emptyNote, error, setError } = props

  const { newNoteWord, addItem, setNewNoteWord, newNotesInputRef } =
    useContext(NotesContext)

  const onSubmit = (event) => {
    event.preventDefault()
    addItem(emptyNote)
  }

  const onInput = (event) => {
    const value = event.target.value
    const clearValue = value.trim()
    const hasOnlySpaces = value.length > 0 && clearValue.length === 0

    setNewNoteWord(value)
    setError(hasOnlySpaces ? 'The task cannot be empty' : '')
  }

  return (
    <form className="frame__input" onSubmit={onSubmit}>
      <input
        className={`${error ? 'is-invalid' : ''}`}
        type="text"
        id={id}
        placeholder={placeholder}
        value={newNoteWord}
        onChange={onInput}
        ref={newNotesInputRef}
      />
      {error && <span className="frame__error">{error}</span>}
      <button
        title="Add new note"
        className="frame__add"
        type="submit"
        disabled={isDisabled}
      >
        <span>ADD</span>
      </button>
    </form>
  )
}

export default memo(Add)
