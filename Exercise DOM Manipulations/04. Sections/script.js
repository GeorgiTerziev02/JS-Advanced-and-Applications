function create(words) {
   const sections = document.getElementById('content');
   for (let i = 0; i < words.length; i++) {
      const word = words[i];
      let newDiv = document.createElement('div');
      let newP = document.createElement('p');
      newP.textContent = word;
      newP.style.display = 'none';

      newDiv.appendChild(newP);
      sections.appendChild(newDiv);
   }

   sections.addEventListener('click', handler);

   function handler(e){
      let div = e.target;
      div.children[0].style.display = 'block';
   }
}