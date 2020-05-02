function createTable(array) {
    array.forEach((value) => JSON.parse(value));
    var html = '';
    html = html + '<table> \n';

    for (let i = 0; i < array.length; i++) {
        const element = JSON.parse(array[i]);
            html += '\t <tr> \n';
            html += '\t \t<td>' + element.name + '</td>\n';
            html += '\t \t<td>' + element.position + '</td>\n';
            html += '\t \t<td>' + element.salary + '</td>\n';
            html += '\t </tr> \n';
    }

    html = html + '</table>';

    console.log(html);
}

createTable(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']
);