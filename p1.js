const sumOf3And5s = function () {
    let sum = 0;
    const max = 1000;

    for (let i = 0; i < max; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(sumOf3And5s());