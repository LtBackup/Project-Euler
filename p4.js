const largestPalindromeProduct = function () {
    let palindrome = 100001;
    let candidate = 0;
    let candidateStr;
    let reverseStr;

    //Will not scale!
    for (let factor1 = 999; factor1 > 0; factor1--){
        for(let factor2 = 999; factor2 > 0; factor2--){
            candidate = factor1 * factor2;
            if(candidate.toString() === candidate.toString().split("").reverse().join("")){
                if(candidate > palindrome){
                    palindrome = candidate;
                }
            }
        }
    }
    return palindrome;
}

console.log(largestPalindromeProduct());

    //max factor 998001
    //first palindrome 989989
    //assuming we get into 6 digits, first possible palindrome factor is 100001