import { NotesContext } from '@/shared/model/context/NotesContext'
import { memo, useContext } from 'react'
import './Search.scss'

export const Search = (props) => {
    const {
        title,
        type,
    } = props

    const {
        searchQuery,
        setSearchQuery
    } = useContext(NotesContext)

    return (
        <form 
        className="table__search-frame"
        onSubmit={(event) => event.preventDefault()}
        >
            <label 
            className='table__search-label' 
            htmlFor="Search"
            >
                {title}
            </label>
            <input
            className='table__search'
            type={type} 
            id='Search' 
            placeholder='Search...'
            value={searchQuery}
            onInput={(event) => setSearchQuery(event.target.value)}
            />
        </form>
    )
}

export default memo(Search)