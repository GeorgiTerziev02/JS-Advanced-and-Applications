function solution(worker) {
    if (worker.dizziness) {
        let requiredWater = 0.1 * worker.experience * worker.weight;
        worker.levelOfHydrated += requiredWater;
        worker.dizziness = false;
    }

    return worker;
}

console.log(solution({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
  ));