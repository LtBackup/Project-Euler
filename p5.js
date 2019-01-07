const productDivisibleUpTo20 = function () {
    let starterFactor = 1 * 2 * 3 * 5 * 7 * 11 * 13 * 17 * 19;
    let testValue = starterFactor;
    let result = 0;
    while (result < Math.pow(2, 53)){
        if(testValue % 20 === 0 && testValue % 19 === 0 && testValue % 18 === 0 && testValue % 16 === 0 && testValue % 15 === 0 && testValue % 14 === 0 && testValue %13 === 0 && testValue % 12 === 0 && testValue % 11 === 0){
            return testValue;
        }
        else{
            testValue += starterFactor;
        }
    }
}

console.log(productDivisibleUpTo20());

    //only need to multiply primes since everything else is divisible by something smaller than it.