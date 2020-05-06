function solve() {
   const button = document.getElementById('searchBtn');

   button.addEventListener('click', search);

   function search(){
      const inputField = document.getElementById('searchField');
      let input = inputField.value;
      
      let data = Array.from(document.querySelectorAll('tbody > tr'));
      
      for (let i = 0; i < data.length; i++) {
         const row = data[i];
         row.classList.remove('select');
         const children = Array.from(row.children);
         for (let j = 0; j < children.length; j++) {
            let element = children[j].innerHTML;
            if(element.includes(input)){
               row.classList.add('select');
               break;
            }
         }
      }

      inputField.value = '';
   }
}