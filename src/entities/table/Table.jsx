import Search from '@/shared/ui/search/Search'
import Wrapper from '../wrapper/Wrapper'
import './Table.scss'

function Table() {

    return (
        <div className="table">
            <Search type='search' title='Your original word!' />
            <Search type='search' title='Your translate word!' />
            <Search type='search' title='Your tag!' />
            <Wrapper />
        </div>
    )
}

export default Table