let k = (function () {
    // should not use other string methods it may cause side effects
    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            return str + this;
        }

        return this.toString();
    }

    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            return this + str;
        }

        return this.toString();
    }

    String.prototype.isEmpty = function () {
        return this.length === 0;
    }

    String.prototype.truncate = function (n) {
        if (n < 4) {
            return '.'.repeat(n);
        } else if (n >= this.length) {
            return this.toString();
        } else {
            let indexOf = this.substring(0, n - 2).lastIndexOf(' ');

            if (indexOf !== -1) {
                return this.substring(0, indexOf).toString() + '...';
            } else {
                return this.substring(0, n - 3).toString() + '...';
            }
        }
    }

    String.format = function (str) {
        for (let i = 0; i < arguments.length; i++) {
            const element = arguments[i + 1];
            if (element === undefined) {
                break;
            }
            if (str.includes(`{${i}}`)) {
                str = str.replace(`{${i}}`, element);
            }
        }

        return str;
    }
}())

console.log('hello'.ensureStart('hello'));
console.log(''.isEmpty());
console.log(String.format('jumps {0} {1}', 'dog', 'monkey', 'ala'));
console.log('hello'.truncate(5));