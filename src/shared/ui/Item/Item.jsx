import { NotesContext } from '@/shared/model/context/NotesContext'
import { Delete } from '@/shared/ui/button/delete'
import { Rename } from '@/shared/ui/button/rename'
import { memo, useContext } from 'react'
import './Item.scss'

export const Item = (props) => {
  const { deleteNote, isHidden, title, id, field, value, toggle, isActive } =
    props

  const { updateNote } = useContext(NotesContext)

  const onSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <form className="wrapper__item wrapper__item-original" onSubmit={onSubmit}>
      {isActive ? (
        <input
          title="Input new title note"
          value={value}
          type="text"
          id="rename"
          placeholder="Rename..."
          autoFocus
          onChange={(event) => updateNote(id, field, event.target.value)}
        ></input>
      ) : (
        <span onDoubleClick={toggle}>
          {value.trim() === '' ? title : value}
        </span>
      )}
      <div className="wrapper__item-frame">
        <Rename toggle={toggle} isActive={isActive} />
        <Delete deleteNote={deleteNote} isHidden={isHidden} />
      </div>
    </form>
  )
}

export default memo(Item)
