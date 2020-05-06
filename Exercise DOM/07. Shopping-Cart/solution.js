function solve() {
   const div = document.getElementsByClassName('shopping-cart')[0];
   let textArea = document.querySelector('body > div > textarea');

   let totalPrice = 0;
   const boughtItems = [];

   let handler = (e) => {
      if (e.target.className === 'add-product') {
         let value = e.target.parentElement;
         let price = value.nextElementSibling.innerHTML;
         let infoDiv = value.previousElementSibling;

         totalPrice += Number(price);
         let name = infoDiv.firstElementChild.innerHTML;

         if (!boughtItems.includes(name)) {
            boughtItems.push(name);
         }

         textArea.value += `Added ${name} for ${price} to the cart.\n`;
      }
      else if (e.target.className === 'checkout') {
         let checkout = `You bought ${boughtItems.join(', ')} for ${totalPrice.toFixed(2)}.`;

         textArea.value += checkout;
         div.removeEventListener('click', handler);
      }
   };

   div.addEventListener('click', handler);
}