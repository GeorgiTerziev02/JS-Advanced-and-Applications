import { weather } from './fetch.js';

const weatherSymbols = {
    sunny: '☀',
    partlySunny: '⛅',
    overcast: '☁',
    rain: '☂',
    degrees: '°'
}

function attachEvents() {
    const html = {
        submit: () => document.getElementById('submit'),
        location: () => document.getElementById('location'),
        current: () => document.getElementById('current'),
        forecast: () => document.getElementById('forecast'),
        upcoming: () => document.getElementById('upcoming'),
    }

    html.submit().addEventListener('click', handler);

    function handler() {
        let location = html.location().value;

        html.forecast().style.display = 'block';
        weather()
            .locations()
            .then((locations) => {
                let currentLocation = locations.find(x => x.name === location);

                return Promise.all([
                    weather().today(currentLocation.code),
                    weather().upcoming(currentLocation.code)]
                );
            })
            .then(([today, upcoming]) => {
                generateTodayWeatherInfo(today);
                generateUpcomingWeatherInfo(upcoming);
            })
            .catch((e) => {
                const error = createHtmlElemnt('h1',[], 'Error');
                html.forecast().appendChild(error);
            });

        function generateTodayWeatherInfo(today) {
            const { condition, low, high } = today.forecast;
            const { name } = today;
            const symbol = getSymbol(condition);

            const divForecast = createHtmlElemnt('div', ['forecasts']);
            const span = createHtmlElemnt('span', ['condition', 'symbol'], weatherSymbols[symbol]);
            const spanWrapper = createHtmlElemnt('span', ['condition']);

            const spanName = createHtmlElemnt('span', ['forecast-data'], name);
            const degreesInfo = `${low}${weatherSymbols.degrees}/${high}${weatherSymbols.degrees}`;
            const spanDegrees = createHtmlElemnt('span', ['forecast-data'], degreesInfo);
            const spanCondition = createHtmlElemnt('span', ['forecast-data'], condition);

            spanWrapper.append(spanName, spanDegrees, spanCondition);
            divForecast.append(span, spanWrapper);
            // html.current().innerHTML = '';
            html.current().appendChild(divForecast);
        }

        function getSymbol(symbol) {
            return symbol.split('').filter((c) => c !== ' ').map((c) => c.toLowerCase()).join('');
        }

        function generateUpcomingWeatherInfo(upcoming) {
            const div = createHtmlElemnt('div', ['forecast-info']);

            upcoming
                .forecast.forEach((el) => {
                    const { condition, low, high } = el;
                    const symbol = getSymbol(condition);
                    const degreesRange = `${low}${weatherSymbols.degrees}/${high}${weatherSymbols.degrees}`;

                    const spanUpcoming = createHtmlElemnt('span', ['upcoming']);

                    const spanSymbol = createHtmlElemnt('span', ['symbol'], weatherSymbols[symbol]);
                    const spanDegrees = createHtmlElemnt('span', ['forecast-data'], degreesRange);
                    const spanCondition = createHtmlElemnt('span', ['forecast-data'], condition);

                    spanUpcoming.append(spanSymbol, spanDegrees, spanCondition);
                    div.appendChild(spanUpcoming);
                });

               // html.upcoming().innerHTML = '';
            html.upcoming().appendChild(div);
        }

        /**
         * 
         * @param {String} tagName 
         * @param {Array} classNames 
         * @param {String} textContent 
         */
        function createHtmlElemnt(tagName, classNames, textContent) {
            const element = document.createElement(tagName);

            if (classNames) {
                element.classList.add(...classNames);
            }

            if (textContent) {
                element.textContent = textContent;
            }

            return element;
        }
    }
}

attachEvents();