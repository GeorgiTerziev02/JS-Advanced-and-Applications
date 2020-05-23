function attachEvents() {
    const loadBtn = document.getElementById('btnLoad');
    const createBtn = document.getElementById('btnCreate');
    const phonebook = document.getElementById('phonebook');
    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');

    loadBtn.addEventListener('click', loadHandler);

    function loadHandler() {
        phonebook.textContent = '';
        let loadUrl = 'https://phonebook-nakov.firebaseio.com/phonebook.json';

        fetch(loadUrl)
            .then(res => res.json())
            .then(data => {
                Object.entries(data)
                    .forEach(([id, personObj]) => {
                        const li = document.createElement('li');
                        li.textContent = `${personObj.person}: ${personObj.phone}`;

                        const deleteBtn = document.createElement('button');
                        deleteBtn.textContent = `Delete`;
                        deleteBtn.setAttribute('value', id);
                        deleteBtn.addEventListener('click', deleteHandler);

                        li.appendChild(deleteBtn);
                        phonebook.appendChild(li);
                    });
            })
            .catch(console.log);
    }

    function deleteHandler() {
        let id = this.value;
        let deleteUrl = `https://phonebook-nakov.firebaseio.com/phonebook/${id}.json`;

        fetch(deleteUrl, {
            method: 'delete'
        })
            .then(loadHandler)
            .catch((e) => console.log('Error'));
    }

    createBtn.addEventListener('click', createHandler);

    function createHandler() {
        let createUrl = `https://phonebook-nakov.firebaseio.com/phonebook.json`;
        let objectToCreate = {
            person: `${personInput.value}`,
            phone: `${phoneInput.value}`
        };

        fetch(createUrl, {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(objectToCreate)
        })
            .then(() => {
                personInput.value = '';
                phoneInput.value = '';
                loadHandler();
            })
    }
}

attachEvents();