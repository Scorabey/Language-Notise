const URL = 'http://localhost:3001/notes'

const headers = {
    'Content-type': 'application/json'
}

const noteApi = {
    getAll: () => {
        return fetch(URL).then((response) => response.json())
    },

    Add: (note) => {
        return fetch(URL, {
                method: 'POST',
                headers,
                body: JSON.stringify(note)
            })
                .then((response) => response.json())
    },

    Delete: (id) => {
        return fetch(`${URL}/${id}`, {method: 'DELETE'})
    },

    ToggleComplete: (id, field) => {
        return fetch(`${URL}/${id}`, {
            method: 'PATCH',
            headers,
            body: JSON.stringify(field)
        })
    }
}

export default noteApi