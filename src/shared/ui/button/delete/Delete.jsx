import './Delete.scss'

function Delete(props) {
    const {
        hidden
    } = props

    return (
        <button className={`item__delete ${hidden}`}>
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.242 9.05991e-06L0.00599957 4.23901L11.67 15.909L0 27.579L4.245 31.818L15.912 20.151L27.582 31.821L31.821 27.576L20.154 15.909L31.824 4.23901L27.579 9.05991e-06L15.912 11.667L4.242 9.05991e-06Z" fill="#E0D5CA" />
            </svg>
        </button>
    )
}

export default Delete