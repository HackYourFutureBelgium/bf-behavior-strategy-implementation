/**
 * A function that returns the first n numbers of the Fibonacci sequence.
 *
 * @param {number} n - An integer indicating how many Fibonacci numbers to calculate.
 * @returns {number[]} An array containing the first n Fibonacci numbers.
 *
 * @example
 * fibonacci(0); // -> []
 *
 * @example
 * fibonacci(1); // -> [0]
 *
 * @example
 * fibonacci(2); // -> [0, 1]
 *
 * @example
 * fibonacci(5); // -> [0, 1, 1, 2, 3]
 */

export const fibonacci = (num) => {
    if (typeof num === 'string') {
        num = parseInt(num);
    }

    if (isNaN(num) || num < 0) {
        return 'OOPS';
    }

    if (num === 0) {
        return 0;
    }

    let a = 0;
    let b = 1;
    // Each number is the sum of the two preceding numbers.
    for (let i = 2; i <= num; i++) {
        const temp = a + b;
        a = b;
        b = temp;
    }

    return b;
};
