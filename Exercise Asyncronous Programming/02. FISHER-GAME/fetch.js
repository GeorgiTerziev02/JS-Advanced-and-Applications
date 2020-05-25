export const fetchData = function() {
    const baseUrl = 'https://fisher-game.firebaseio.com/catches';
    const defualtHeader = {
        'Content-Type': 'application/json'
    };

    return {
        list: () => 
            fetch(`${baseUrl}.json`)
            .then(res => res.json()),
        create: (data) =>
            fetch(`${baseUrl}.json`, {
                method: 'Post',
                body: JSON.stringify(data),
                headers: defualtHeader
            }).then(res => res.json()),
        update: (id, data) => 
            fetch(`${baseUrl}/${id}.json`, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: defualtHeader
            }),
        delete: (id) => 
            fetch(`${baseUrl}/${id}.json`, {
                method: 'DELETE',
                body: JSON.stringify(id),
                headers: defualtHeader
            })
    }
}()