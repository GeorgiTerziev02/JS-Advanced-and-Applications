function orderTickets(tickets, order) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    const ticketsArray = [];

    tickets.forEach(x => {
        let params = x.split('|').map(y => y.trim());
        let ticket = new Ticket(params[0], Number(params[1]), params[2]);
        ticketsArray.push(ticket);
    });

    if (order === 'status') {
        return ticketsArray.sort((a, b) => a.status.localeCompare(b.status));
    } else if (order === 'destination') {
        return ticketsArray.sort((a, b) => a.destination.localeCompare(b.destination));
    } else if (order === 'price') {
        return ticketsArray.sort((a, b) => a.price - b.price);
    }
}

console.log(orderTickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
));