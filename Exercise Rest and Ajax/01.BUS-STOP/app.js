function getInfo() {
    const inputField = document.getElementById('stopId');
    const stopName = document.getElementById('stopName');
    const buses = document.getElementById('buses');

    let url = `https://judgetests.firebaseio.com/businfo/${inputField.value}.json`;

    stopName.textContent = '';
    buses.textContent = '';

    fetch(url)
        .then(response => response.json())
        .then((data)=>{        
            stopName.textContent = data.name; 

            Object.entries(data.buses)
                .forEach(([busId, time]) => {
                    const li = document.createElement("li");
                    li.textContent = `Bus ${busId} arrives in ${time}`;
                    buses.appendChild(li);
                })
        })
        .catch((err) => stopName.textContent = 'Error');
}