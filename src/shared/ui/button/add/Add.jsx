import { NotesContext } from '@/shared/model/context/NotesContext';
import { memo, useContext } from 'react';
import './Add.scss';

export const Add = (props) => {
    const {
        placeholder,
        id,
        isDisabled,
        emptyNote
    } = props

    const {
        newNoteWord,
        addItem,
        setNewNoteWord,
        newNotesInputRef
    } = useContext(NotesContext)

    const onSubmit = (event) => {
        event.preventDefault()
        addItem(emptyNote)
    }

    return (
        <form className='frame__input' onSubmit={onSubmit}>
            <input
            type="text" 
            id={id}
            placeholder={placeholder}
            value={newNoteWord}
            onChange={(e) => setNewNoteWord(e.target.value)}
            ref={newNotesInputRef}
            />
            <button 
            title='Add new note'
            className="frame__add"
            type='submit'
            disabled={isDisabled}
            >
                <span>ADD</span>
            </button>
        </form>
    )
}

export default memo(Add)