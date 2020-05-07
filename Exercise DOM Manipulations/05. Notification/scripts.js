function notify(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;

    notification.style.display = 'block';

    setTimeout(setToNone, 2000);

    function setToNone(){
        notification.style.display = 'none';
    }
}