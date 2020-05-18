function factory(carObj) {
    const engines = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 },
    ];

    return {
        model: carObj.model,
        engine: engines.find(x => carObj.power <= x.power),
        carriage: { type: carObj.carriage, color: carObj.color },
        wheels: Array(4).fill(carObj.wheelsize % 2 === 0 ? carObj.wheelsize - 1 : carObj.wheelsize),
    };
}