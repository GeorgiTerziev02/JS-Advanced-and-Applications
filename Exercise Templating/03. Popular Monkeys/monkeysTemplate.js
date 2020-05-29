import {monkeys} from './monkeys.js'
(async function() {
    const source = await fetch('./templates/monkeys.hbs').then(x=>x.text());
    const template = Handlebars.compile(source);
    const html = template({monkeys});

    const container = document.getElementsByClassName('monkeys')[0];
    container.innerHTML = html;
    container.addEventListener('click', (e)=>{
        if(e.target.tagName === 'BUTTON'){
           const monkeyId = e.target.parentNode.getElementsByTagName('p')[0].id;

           const p = document.getElementById(monkeyId)
           p.style.display = p.style.display === 'block' ? 'none': 'block';
        }
    });
}())