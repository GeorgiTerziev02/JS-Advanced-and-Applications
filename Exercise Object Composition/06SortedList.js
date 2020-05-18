function solve() {
    return {
        elements: [],
        size: 0,
        add: function (el) {
            this.elements.push(el);
            this.elements.sort((a, b) => a - b);
            this.size++;
        },
        get: function(index){
            if(index < 0 || index >= this.size){
                throw new RangeError('Invalid Index');
            }

            return this.elements[index];
        },
        remove: function (index) {
            if(index < 0 || index >= this.size){
                throw new RangeError('Invalid Index');
            }
            this.elements.splice(index, 1);
            this.size--;
        }
    };
}