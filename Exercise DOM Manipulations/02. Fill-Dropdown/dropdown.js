function addItem() {
    const textInputField = document.getElementById('newItemText');
    let text = textInputField.value;
    const valueInputField = document.getElementById('newItemValue');
    let value = valueInputField.value;

    let option = document.createElement('option');
    option.textContent = text;
    option.setAttribute('value', value);

    document.getElementById('menu').appendChild(option);

    textInputField.value = '';
    valueInputField.value = '';
}