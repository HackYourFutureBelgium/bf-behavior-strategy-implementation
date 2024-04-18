// #todo

import { isArrayOfNumbers } from './utils/is-array-of-numbers.js';

/**
 * Finds the even count in an array of numbers.
 * @param {number[]} numbers - The array of numbers.
 * @returns {number} The even number count in the array.
 * @throws {TypeError} If the input is not an array of numbers.
 */
export const numberOfEvens = (numbers = []) => {
    if (!isArrayOfNumbers(numbers)) {
        throw new TypeError('numbers must be an array of numbers.');
    }

    let evenCount = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenCount++;
        }
    }

    return evenCount;
};