/**
 * sums all even numbers in an array
 * @param {array} arr - an array of numbers
 * @returns {number} - the sum of all even numbers in argument
 */

export const filterReduce = (arr) => {
    return arr
        .reverse()
        .filter((num) => num % 2 === 0) // keep the even numbers
        .reduce((sum, num) => sum + num, 0); // add all the even numbers
};
