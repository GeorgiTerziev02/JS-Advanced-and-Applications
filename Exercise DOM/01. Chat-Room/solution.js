function solve() {
   const sendButton = document.getElementById('send');

   sendButton.addEventListener('click', sendMessage);

   function sendMessage(){
      let chatInput = document.getElementById('chat_input').value;

      let newMessage = document.createElement('div');
      newMessage.innerText = chatInput;
      //newMessage.setAttribute('class', 'message my-message');
      newMessage.classList.add('message', 'my-message');

      document.getElementById('chat_messages').appendChild(newMessage);

      document.getElementById('chat_input').value = '';
   }
}


