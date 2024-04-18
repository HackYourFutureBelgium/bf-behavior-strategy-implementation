import { isArrayOfNumbers } from './utils/is-array-of-numbers.js';

/**
 * Finds the smallest number in an array of numbers.
 * @param {number[]} numbers - The array of numbers.
 * @returns {number} The smallest number in the array.
 * @throws {TypeError} If the input is not an array of numbers.
 */

export const findSmallestNumber = (numbers = []) => {
    if (!isArrayOfNumbers(numbers)) {
        throw new TypeError('Input must be an array of numbers.');
    }
    if (numbers.length === 0) {
        return;
    }

    let smallestNumber;
    const sortedArr = numbers.sort((a, b) => b - a);
    for (let i = 1; i < sortedArr.length; i++) {
        smallestNumber = Math.min(sortedArr[i - 1], sortedArr[i]);
    }

    return smallestNumber;
};