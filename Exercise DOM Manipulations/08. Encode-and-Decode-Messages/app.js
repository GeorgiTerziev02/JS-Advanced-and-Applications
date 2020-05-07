function encodeAndDecodeMessages() {
    const buttons = document.getElementsByTagName('button');
    const messageArea = document.getElementsByTagName('textarea')[0];
    const encodedMessageArea = document.getElementsByTagName('textarea')[1];

    buttons[0].addEventListener('click', encode);
    buttons[1].addEventListener('click', decode);

    function encode() {
        let message = messageArea.value;
        let newMessage = convert(1, message);
        encodedMessageArea.value = newMessage;

        messageArea.value = '';
    }

    function decode() {
        let message = encodedMessageArea.value;
        let newMessage = convert(-1, message);
        encodedMessageArea.value = newMessage;
    }

    function convert(num, message) {
        let newMessage = '';
        for (let i = 0; i < message.length; i++) {
            let code = message[i].charCodeAt(0);
            code += num;
            newMessage += String.fromCharCode(code);
        }

        return newMessage;
    }
}