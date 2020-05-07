function lockedProfile() {
    const $buttons = document.querySelectorAll('div#container main#main div.profile button');

    [...$buttons].forEach((b) => {
        b.addEventListener('click', (e) => {
            const divSibling = e.currentTarget.parentNode.children[9];

            const selector = divSibling.id.split('HiddenFields')[0];

            const unlockInput = document.querySelector(`input[name="${selector + "Locked"}"]`);

            if (!unlockInput.checked && b.textContent === 'Show more') {
                divSibling.style.display = 'block';
                b.textContent = 'Hide it';
            } else if (!unlockInput.checked) {
                divSibling.style.display = 'none';
                b.textContent = 'Show more';
            }
        })
    });
}