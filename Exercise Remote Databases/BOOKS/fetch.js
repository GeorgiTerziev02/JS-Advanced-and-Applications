export const fetchData = function fetchData() {
    const apiKey = 'https://books-393af.firebaseio.com/books';
    return {
        listAll: () => fetch(apiKey + '.json')
            .then(x => x.json()),
        create: (book) => fetch(apiKey + '.json', {
            method: 'POST',
            body: JSON.stringify(book),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(x => x.json()),
        update: (id, book) => fetch(`${apiKey}/${id}.json`,{
            method: 'PUT',
            body: JSON.stringify(book),   
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(x => x.json()),
        delete: (id) => fetch(`${apiKey}/${id}.json`,{
            method: 'DELETE'
        }).then(x => x.json()),
    };
}();