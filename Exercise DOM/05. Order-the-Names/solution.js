function solve() {
    const addButton = document.getElementsByTagName('button')[0];

    addButton.addEventListener('click', addName);

    function addName() {
        const nameField = document.getElementsByTagName('input')[0];
        let name = nameField.value;

        let firstLetter = name[0].toUpperCase();
        let fixedName = firstLetter + name.substring(1).toLowerCase();
        let charIndex = Number(firstLetter.charCodeAt('0') - 65);
        const lis = document.getElementsByTagName('li');

        if (lis[charIndex].innerHTML !== '') {
            lis[charIndex].innerHTML += ', ' + fixedName;
        }
        else {
            lis[charIndex].innerHTML = fixedName;
        }

        nameField.value = '';
    }
}