/**
 * Reverses and concatenates an array of strings.
 *
 * @param {string[]} arr - The array of strings to be reversed and concatenated.
 * @returns {string} - The result of reversing and concatenating the array elements.
 */

export const arrayMethods = (arr) => {
    [...arr] // .reverse has a side effect, so copy the argument
        .reverse() // reverse the copied array
        .reduce((acc, item) => acc + item, '');
};
