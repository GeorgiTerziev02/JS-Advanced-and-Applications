function fruit(fruit, grams, pricePerKg){
    var kg = grams/1000;
    var totalPrice = kg * pricePerKg;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`)
}

fruit('apple', 1563, 2.35);