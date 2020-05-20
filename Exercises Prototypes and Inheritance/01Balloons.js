function solve() {
    class Balloon {
        color;
        gasWeight;
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }

    class PartyBalloon extends Balloon {
        #ribbon;
        constructor(color, gasWeight, ribbonColor, ribbonlength) {
            super(color, gasWeight);
            this.#ribbon = {
                color: ribbonColor,
                length: ribbonlength,
            };
        }

        get ribbon() {
            return this.#ribbon;
        }
    }

    class BirthdayBalloon extends PartyBalloon {
        #text;
        constructor(color, gasWeight, ribbonColor, ribbonlength, text) {
            super(color, gasWeight, ribbonColor, ribbonlength);
            this.#text = text;
        }

        get text() {
            return this.#text;
        }
    }

    return {
        Balloon: Balloon,
        PartyBalloon: PartyBalloon,
        BirthdayBalloon: BirthdayBalloon
    };
}

const bal = new BirthdayBalloon(1, 1, 1, 1, 'gosho');
bal.text = 'ivan';
console.log(bal.text);