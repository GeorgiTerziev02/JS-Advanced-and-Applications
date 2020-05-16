function getArticleGenerator(articles) {
    let storage = articles;
    let contentDiv = document.getElementById('content');

    return function () {
        if (storage.length > 0) {
            let div = document.createElement('article');
            div.textContent = storage.shift();
            contentDiv.appendChild(div);
        }
    }
}
