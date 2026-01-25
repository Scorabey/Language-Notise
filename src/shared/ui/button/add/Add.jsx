import { NotesContext } from '@/shared/model/context/NotesContext';
import { memo, useContext } from 'react';
import './Add.scss';

export const Add = (props) => {
    const {
        placeholder,
        id,
        value,
        onChange,
    } = props

    const {
        newNotesInputRef,
        addItem,
    } = useContext(NotesContext)

    const onSubmit = (event) => {
        event.preventDefault()
        addItem()
    }

    return (
        <form className='frame__input' onSubmit={onSubmit}>
            <input
            type="text" 
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            ref={newNotesInputRef}
            />
            <button 
            title='Add new note'
            className="frame__add"
            type='submit'
            >
                <span>ADD</span>
            </button>
        </form>
    )
}

export default memo(Add)