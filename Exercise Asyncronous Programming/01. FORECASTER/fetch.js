export function weather() {
    const baseUrl = 'https://judgetests.firebaseio.com/';

    return {
        locations: () => fetch(baseUrl + 'locations.json').then(res => res.json()),
        today: (code) => fetch(baseUrl + `forecast/today/${code}.json`).then(res => res.json()),
        upcoming: (code) => fetch(baseUrl + `forecast/upcoming/${code}.json`).then(res => res.json())
    }
}