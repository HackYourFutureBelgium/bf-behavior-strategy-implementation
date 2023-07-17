/**
 * Filters an array of objects based on the 'pass' property.
 *
 * @param {Array} arr - The array of objects to be filtered.
 * @returns {Array} - A new array containing only the objects that have 'pass' property set to true.
 */

export const solution = (arr) => {
    return arr.filter((obj) => obj.pass === true);
};
