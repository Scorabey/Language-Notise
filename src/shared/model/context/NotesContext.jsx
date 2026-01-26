import { createContext, useCallback, useEffect, useMemo, useRef, useState } from "react";


export const NotesContext = createContext({})

export const NotesProvider = (props) => {
    const { children } = props

    const [notes, setNotes] = useState(() => {
        const savedNotes = localStorage.getItem('notes')

        if(savedNotes) {
            return JSON.parse(savedNotes)
        }

        return  [
        {id: 'note-1', Word: 'Aplication', Translate: 'Приложение', Tag: '#software'},
        {id: 'note-2', Word: 'Network', Translate: 'Соединение', Tag: '#network'}
    ]
    })

    const newNotesInputRef = useRef(null)

    const [newNoteWord, setNewNoteWord] = useState('')

    const [isActive, setIsActive] = useState(false)

    const [activeEdit, setActiveEdit] = useState({
        id: null,
        field: null
    })

    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    useEffect(() => {
        newNotesInputRef.current.focus()
    }, [])
    const toggleRename = (id, field) => {
        setActiveEdit(prev => 
            prev.id === id && prev.field === field 
            ? {id: null, field: null}
            : {id, field}
        )
    }
    const toggle = useCallback(() => {
        setIsActive(prev => !prev)
    }, [])
    const addItem = useCallback((checking) => {
        if(!checking) return

        setNotes(prev => [
            ...prev,
            {
                id: crypto?.randomUUID() ?? Date.now().toString(),
                Word: newNoteWord,
                Translate: null,
                Tag: null
            }
        ])

        setNewNoteWord('')
        setSearchQuery('')
        newNotesInputRef.current.focus()
    }, [newNoteWord])  
    const deleteNote = useCallback((noteId) => {
        const isConfirmed = confirm('Are you sure delete this note?')

        if(isConfirmed) {
            setNotes(prevNotes => 
                prevNotes.filter((note) => note.id !== noteId)
            )
        }
    }, [])
    const updateNote = useCallback((id, field, value) => {
        setNotes(prev => 
            prev.map(note => 
                note.id === id
                ? {...note, [field]: value}
                : note
            )
        )
    }, [])
    const clearSearchQuery = searchQuery.trim().toLowerCase()

    const filteredNotes = useMemo(() => {
        if(!clearSearchQuery) return notes

        return notes.filter(note => 
                        (note.Word && note.Word.toLowerCase().includes(clearSearchQuery)) ||
                        (note.Translate && note.Translate.toLowerCase().includes(clearSearchQuery)) ||
                        (note.Tag && note.Tag.toLowerCase().includes(clearSearchQuery))
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
            setNewNoteWord
        }}
        >
            {children}
        </NotesContext.Provider>
    )
}