function solve() {
    const infoSpan = document.getElementsByClassName('info')[0];
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');

    let nextId = 'depot';
    let name;

    function depart() {
        let url = `https://judgetests.firebaseio.com/schedule/${nextId}.json`;

        fetch(url)
            .then(res => res.json())
            .then(info => {
                if(info.error !== undefined){
                    throw new Error();
                }
                nextId = info.next;
                name = info.name;
                infoSpan.textContent = `Next stop ${info.name}`;
                departBtn.disabled = true;
                arriveBtn.disabled = false;
            })
            .catch((err) => {
                infoSpan.textContent = 'Error';
                departBtn.disabled = true;
                arriveBtn.disabled = true;
            });
    }

    function arrive() {
        infoSpan.textContent = `Arriving at ${name}`;
        arriveBtn.disabled = true;
        departBtn.disabled = false;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();