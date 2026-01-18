import Item from '@/shared/ui/Item/Item';
import './Wrapper.scss';

function Wrapper() {
    const Words = [
        {Word: 'Aplication', Translate: 'Приложение', Tag: '#software'}
    ]

    return (
        <>
            <div className="wrapper">
                <Item title={Words[0].Word} />
            </div>
            <div className="wrapper">
                <Item hidden='hidden' title={Words[0].Translate} />
            </div>
            <div className="wrapper">
                <Item title={Words[0].Tag} />
            </div>
        </>
    )
}

export default Wrapper