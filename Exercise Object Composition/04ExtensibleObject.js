const ExtensibleObject = function () {
    return {
        extend: function (template) {
            Object.entries(template)
                .forEach(([key, value]) => {
                    if(typeof value === 'function'){
                        Object.getPrototypeOf(this)[key] = value;
                    } else{
                        this[key] = value;
                    }
            });
        }
    }
}

const a = ExtensibleObject();

a.extend({f: 'f', func: function(){this.f += 'fff'}});
console.log(a.f);
a.func();
console.log(a.f);