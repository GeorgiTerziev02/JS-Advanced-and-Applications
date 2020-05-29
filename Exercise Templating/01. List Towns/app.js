const htmlElements = {
    loadBtn: () => document.getElementById('btnLoadTowns'),
    input: () => document.getElementById('towns'),
    container: () => document.getElementById('root')
}

const loadBtn = htmlElements.loadBtn();

loadBtn.addEventListener('click', async function () {
    const towns = htmlElements.input().value.split(', ').map(x => x.trim());

    let source = await fetch('./towns.hbs').then(x => x.text());
    let template = Handlebars.compile(source);
    let html = template({ towns });

    htmlElements.container().innerHTML = html;
});