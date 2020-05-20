function melons() {
    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new Error('Abstract class cannot be instantiated directly');
            }
            this.weight = weight;
            this.melonSort = melonSort;
        }

        get elementIndex() {
            return this.weight * this.melonSort.length;
        }

        toString() {
            return `Element: ${this.constructor.name.replace('melon', '')}\n` +
                `Sort: ${this.melonSort}\n` +
                `Element Index: ${this.elementIndex}`;

        }
    }

    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }

    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }

    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }

    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }

    class Melolemonmelon extends Watermelon {
        elements = [
            'Fire',
            'Earth',
            'Air',
            'Water'
        ];
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = 'Water';
        }

        morph() {
            let nextEl = this.elements.shift();
            this.element = nextEl;
            this.elements.push(nextEl);
        }

        toString(){
            return super.toString().replace('Melolemon', this.element);
        }
    }

    return {
        Melon,
        Watermelon,
        Earthmelon,
        Airmelon,
        Firemelon,
        Melolemonmelon
    }
}

const melonsClasses = melons();
//let test = new melonsClasses.Melon(100, "Test");
//Throws error

let watermelon = new melonsClasses.Melolemonmelon(12.5, "Kingsize");
console.log(watermelon.toString());
watermelon.morph();
console.log(watermelon.toString());
watermelon.morph();
console.log(watermelon.toString());
