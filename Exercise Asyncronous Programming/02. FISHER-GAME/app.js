import { fetchData } from './fetch.js';

function attachEvents() {
    const elements = {
        $angler: () => document.querySelector('#addForm input.angler'),
        $weight: () => document.querySelector('#addForm input.weight'),
        $species: () => document.querySelector('#addForm input.species'),
        $location: () => document.querySelector('#addForm input.location'),
        $bait: () => document.querySelector('#addForm input.bait'),
        $captureTime: () => document.querySelector('#addForm input.captureTime'),
        $addBtn: () => document.getElementsByClassName('add')[0],
        $loadBtn: () => document.getElementsByClassName('load')[0],
        $catches: () => document.getElementById('catches'),
        $hr: () => document.createElement('hr'),
    }

    elements.$addBtn().addEventListener('click', addCatch);
    elements.$loadBtn().addEventListener('click', loadCatches);

    function addCatch() {
        const newCatch = {
            angler: elements.$angler().value,
            weight: elements.$weight().value,
            species: elements.$species().value,
            location: elements.$location().value,
            bait: elements.$bait().value,
            captureTime: elements.$captureTime().value,
        };

        fetchData
            .create(newCatch)
            .then(({ name }) => console.log(name))
            .catch((e) => console.log('Error'));

        // Add it if you want
        // loadCatches();
    }

    function loadCatches() {
        fetchData
            .list()
            .then((data) => {
                elements.$catches().innerHTML = '';
                Object.entries(data).forEach(([id, obj]) => {
                    const divWrapper = createHtmlElement('div', ['catch']);
                    divWrapper.setAttribute('data-id', id);

                    const anglerLabel = createLabel('Angler');
                    const anglerInput = createInputField(['angler'], 'text', obj.angler);
                    const weightLabel = createLabel('Weight');
                    const weightInput = createInputField(['weight'], 'number', obj.weight);
                    const speciesLabel = createLabel('Species');
                    const speciesInput = createInputField(['species'], 'text', obj.species);
                    const locationLabel = createLabel('Location');
                    const locationInput = createInputField(['location'], 'text', obj.location);
                    const baitLabel = createLabel('Bait');
                    const baitInput = createInputField(['bait'], 'text', obj.bait);
                    const capTimeLabel = createLabel('Capture Time');
                    const capTimeInput = createInputField(['captureTime'], 'number', obj.captureTime);

                    const updateBtn = createBtn(['update'], 'Update');
                    updateBtn.addEventListener('click', updateCatch);
                    const deleteBtn = createBtn(['delete'], 'Delete');
                    deleteBtn.addEventListener('click', deleteCatch);

                    divWrapper.append(anglerLabel, anglerInput, elements.$hr(), weightLabel, weightInput, elements.$hr());
                    divWrapper.append(speciesLabel, speciesInput, elements.$hr(), locationLabel, locationInput, elements.$hr());
                    divWrapper.append(baitLabel, baitInput, elements.$hr(), capTimeLabel, capTimeInput, elements.$hr(), updateBtn, deleteBtn);

                    elements.$catches().append(divWrapper);
                });
            })
            .catch((e) => console.log('Error'));
    }

    function updateCatch() {
        const id = this.parentElement.getAttribute('data-id');
        const inputFields = Array.from(this.parentElement.children).filter(el => el.tagName === 'INPUT');

        const obj = {
            angler: inputFields[0].value,
            weight: inputFields[1].value,
            species: inputFields[2].value,
            location: inputFields[3].value,
            bait: inputFields[4].value,
            captureTime: inputFields[5].value,
        };

        fetchData.update(id, obj);
    }

    function deleteCatch() {
        fetchData.delete(this.parentElement.getAttribute('data-id'))
        this.parentElement.remove();
    }

    /**
     * 
     * @param {String} tagName 
     * @param {Array} classNames 
     * @param {String} textContent 
     */
    function createHtmlElement(tagName, classNames, textContent) {
        const element = document.createElement(tagName);

        if (classNames) {
            element.classList.add(...classNames);
        }

        if (textContent) {
            element.textContent = textContent;
        }

        return element;
    }

    function createInputField(classNames, type, value) {
        const el = createHtmlElement('input', classNames);
        el.setAttribute('value', value);
        el.setAttribute('type', type);

        return el;
    }

    const createLabel = createHtmlElement.bind(undefined, 'label', undefined);
    const createBtn = createHtmlElement.bind(undefined, 'button');
}

attachEvents();

