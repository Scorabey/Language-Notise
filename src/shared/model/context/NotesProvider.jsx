import noteApi from '@/shared/api/notesApi'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { NotesContext } from './NotesContext'

export const NotesProvider = (props) => {
  const { children } = props

  const [notes, setNotes] = useState([])

  const newNotesInputRef = useRef(null)

  const [newNoteWord, setNewNoteWord] = useState('')

  const [isActive, setIsActive] = useState(false)

  const [activeEdit, setActiveEdit] = useState({
    id: null,
    field: null,
  })

  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    newNotesInputRef.current.focus()

    noteApi.getAll().then(setNotes)
  }, [])
  const toggleRename = (id, field) => {
    setActiveEdit((prev) =>
      prev.id === id && prev.field === field
        ? { id: null, field: null }
        : { id, field },
    )
  }
  const toggle = useCallback(() => {
    setIsActive((prev) => !prev)
  }, [])
  const addItem = useCallback(
    (checking) => {
      if (!checking) return

      const newNotes = {
        Word: newNoteWord,
        Translate: '',
        Tag: '',
      }

      noteApi.Add(newNotes).then((addedNote) => {
        setNotes((prev) => [...prev, addedNote])
        setNewNoteWord('')
        setSearchQuery('')
        newNotesInputRef.current.focus()
      })
    },
    [newNoteWord],
  )
  const deleteNote = useCallback((noteId) => {
    const isConfirmed = confirm('Are you sure delete this note?')

    if (isConfirmed) {
      noteApi.Delete(noteId).then(() => {
        setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId))
      })
    }
  }, [])
  const updateNote = useCallback((id, field, value) => {
    noteApi.ToggleComplete(id, { [field]: value }).then(() => {
      setNotes((prev) =>
        prev.map((note) =>
          note.id === id ? { ...note, [field]: value } : note,
        ),
      )
    })
  }, [])
  const clearSearchQuery = searchQuery.trim().toLowerCase()

  const filteredNotes = useMemo(() => {
    if (!clearSearchQuery) return notes

    return notes.filter(
      (note) =>
        (note.Word && note.Word.toLowerCase().includes(clearSearchQuery)) ||
        (note.Translate &&
          note.Translate.toLowerCase().includes(clearSearchQuery)) ||
        (note.Tag && note.Tag.toLowerCase().includes(clearSearchQuery)),
    )
  }, [notes, clearSearchQuery])

  return (
    <NotesContext.Provider
      value={{
        newNotesInputRef,
        addItem,
        filteredNotes,
        updateNote,
        deleteNote,
        toggle,
        toggleRename,
        isActive,
        activeEdit,
        notes,
        searchQuery,
        setSearchQuery,
        newNoteWord,
        setNewNoteWord,
      }}
    >
      {children}
    </NotesContext.Provider>
  )
}
