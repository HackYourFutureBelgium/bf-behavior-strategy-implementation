/**
 * Filter an array and keep only numbers.
 *
 * @param {Array} arr - The array to filter.
 * @returns {Array} - A new array containing only  valid numbers
 */

export const mapFilter = (arr) => {
    // these work, you need to use them with the right array methods
    const isNotNaN = (entry) => !Number.isNaN(entry);
    const castToNumber = (entry) => Number(entry);

    // fill in the array methods and which logic to use
    const numbers = arr.map(castToNumber);
    const allValidNumbers = numbers.filter(isNotNaN);

    return allValidNumbers;
};
