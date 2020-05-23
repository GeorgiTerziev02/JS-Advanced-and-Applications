function attachEvents() {
    const sendBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');
    const messagesArea = document.getElementById('messages');

    let requestUrl = 'https://rest-messanger.firebaseio.com/messanger.json';

    refreshBtn.addEventListener('click', refreshHandler);
    sendBtn.addEventListener('click', sendHandler);

    function refreshHandler() {
        fetch(requestUrl)
            .then(res => res.json())
            .then(data => {
                let result = '';
                Object.values(data)
                    .forEach(el => {
                        // firebase db bug if(el.author !== undefined){}
                        result += `${el.author}: ${el.content}\n`;
                    });

                messagesArea.textContent = result;
            })
            .catch((e) => console.log('Error'));
    }

    function sendHandler() {
        const authorField = document.getElementById('author');
        const contentField = document.getElementById('content');

        const messageToSend = {
            author: authorField.value,
            content: contentField.value
        };

        fetch(requestUrl, {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(messageToSend)
        })
            .then(() => {
                document.getElementById('author').value = '';
                document.getElementById('content').value = '';

                refreshHandler();
            })
            .catch(() => console.log("Error!!!"));
    }
}

attachEvents();