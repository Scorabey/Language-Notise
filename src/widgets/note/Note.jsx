import FrameTitle from '@/entities/frame-title/FrameTitle';
import Table from '@/entities/table/Table';
import Logo from '@/shared/ui/logo/Logo';
import './Note.scss';

function Note() {

    return (
        <div className='container'>
            <FrameTitle title='Your notes!' />
            <Logo />
            <Table />
        </div>
    )
}

export default Note