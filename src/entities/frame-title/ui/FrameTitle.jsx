import { Input } from '@/shared/ui/input'
import { memo } from 'react'
import './FrameTitle.scss'

export const FrameTitle = (props) => {
    const {
        title
    } = props

    return (
        <div className="frame">
            <h2
            className='frame__title'
            >
                {title}
            </h2>
            <Input
            title='Input new note' 
            placeholder='Write new note...' 
            id='create'
            />
        </div>
    )
}

export default memo(FrameTitle)