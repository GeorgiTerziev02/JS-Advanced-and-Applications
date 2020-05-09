const Extensible = (function () {
    let id = 0;

    return class Extensible{
        constructor(){
            this.id = id++;
        }

        extend(template){
            Object.entries(template)
            .forEach(([key, value]) => {
                if(typeof value === 'function'){
                    this.prototype[key] = value;
                } else {
                    this[key] = value;
                }
            });
        }
    }
})();

// let e = new Extensible();
// let b = new Extensible();
// let c = new Extensible();

// console.log(e.id);
// console.log(b.id);
// console.log(c.id);
