import Delete from '../button/delete/Delete'
import Rename from '../button/rename/Rename'
import './Item.scss'

function Item(props) {
    const {
        hidden,
        title,
    } = props

    return (
    <div className="wrapper__item wrapper__item-original">
         <span>{title}</span>
        <div className="wrapper__item-frame">
            <Rename />
            <Delete hidden={hidden} />
        </div>
    </div>
    )
}

export default Item