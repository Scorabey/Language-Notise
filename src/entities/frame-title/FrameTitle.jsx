import Input from '@/shared/ui/input/Input'
import './FrameTitle.scss'

function FrameTitle(props) {
    const {
        title
    } = props

    return (
        <div className="frame">
            <h1 className='frame__title'>{title}</h1>
            <Input title='Input new note' placeholder='Write new note...' id='create' />
        </div>
    )
}

export default FrameTitle