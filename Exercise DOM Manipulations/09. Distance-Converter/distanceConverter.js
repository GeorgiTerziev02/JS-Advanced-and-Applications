function attachEventsListeners() {
    const btn = document.getElementById('convert');
    btn.addEventListener('click', handler);

    function handler() {
        const inputField = document.getElementById('inputDistance');
        let distance = inputField.value;

        let from = document.getElementById('inputUnits').value;
        let to = document.getElementById('outputUnits').value;

        let result = 0;

        switch (from) {
            case 'km':
                result = distance * 1000;
                break;
            case 'm':
                result = distance;
                break;
            case 'cm':
                result = distance * 0.01;
                break;
            case 'mm':
                result = distance * 0.001;
                break;
            case 'mi':
                result = distance * 1609.34;
                break;
            case 'yrd':
                result = distance * 0.9144;
                break;
            case 'ft':
                result = distance * 0.3048;
                break;
            case 'in':
                result = distance * 0.0254;
                break;
        }

        switch (to) {
            case 'km':
                result = result / 1000;
                break;
            case 'm':
                result = result;
                break;
            case 'cm':
                result = result / 0.01;
                break;
            case 'mm':
                result = result / 0.001;
                break;
            case 'mi':
                result = result / 1609.34;
                break;
            case 'yrd':
                result = result / 0.9144;
                break;
            case 'ft':
                result = result / 0.3048;
                break;
            case 'in':
                result = result / 0.0254;
                break;
        }

        document.getElementById('outputDistance').value = result;
    }
}