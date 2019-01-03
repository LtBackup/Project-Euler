const evenFibonacciSum = function () {
    let first = 1;
    let second = 2;
    let next =3;
    let sum = 2;
    const max = 4000000;

    for (let i = 0; second < max; i++) {
        next = first + second;
        if (next % 2 === 0) {
            sum += next;
        }
        first = second;
        second = next;
    }
    return sum;
}

console.log(evenFibonacciSum());