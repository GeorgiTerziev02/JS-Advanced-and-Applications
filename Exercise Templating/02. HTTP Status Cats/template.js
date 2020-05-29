(() => {
    renderCatTemplate();

    async function renderCatTemplate() {
        const source = await fetch('./cats.hbs').then(res => res.text());
        const template = Handlebars.compile(source);

        const cats = window.cats;
        const html = template({ cats });

        const container = document.getElementById('allCats');
        container.innerHTML = html;

        container.addEventListener('click', function (e) {
            if (e.target.tagName === 'BUTTON') {
                console.log(e.target.dataset.id);
                const div = document.getElementById(e.target.dataset.id);
                div.style.display = div.style.display === 'block' ? 'none' : 'block';
            }
        });
    }

})()
