const largestPrimeFactor = function () {
    let factor = 600851475143;
    let second;
    let candidate;

    for (let first = 2; first < factor - 1; first++) {
        second = factor / first;
        if (second % 1 === 0) {
            console.log(first + " " + second);
            if (isPrime(second)) {
                return second;
            }
        }
    }
}

    const isPrime = function (candidate) {
        let result = false
        if (candidate % 2 !== 0) {
            for (let i = candidate - 1; i > 1; i--) {
                if (candidate % i === 0) {
                    return false;
                }
            }
            return true;
        }
    }

    console.log(largestPrimeFactor());