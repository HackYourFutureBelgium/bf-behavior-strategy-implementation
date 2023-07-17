/**
 * A function that calculates the factorial for a given number.
 *
 * @param {number} n - An integer to factorialize.
 * @returns {number} The factorial of n.
 *
 * @example
 * factorial(0); // -> 0
 *
 * @example
 * factorial(1); // -> 1
 *
 * @example
 * factorial(2); // -> 2
 *
 * @example
 * factorial(5); // -> 120
 */

export const factorial = (num) => {
    if (num < 0) {
        throw new Error('Factorial is not defined for negative numbers.');
    }
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }

    return result;
};
