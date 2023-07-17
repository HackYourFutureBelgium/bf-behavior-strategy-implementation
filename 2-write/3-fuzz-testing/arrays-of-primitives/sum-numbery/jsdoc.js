/**
 * sums all numbery strings in an array
 * returns 0 if the array is empty
 * @param {string[]} arr - the array of strings
 * @returns {number} the sum of all numbery strings
 */

export const sumAllNumbery = (arr) => {
    if (arr.length === 0) {
        return 0;
    }

    const onlyNumbers = arr.filter((item) => !isNaN(item));
    return onlyNumbers.reduce((sum, item) => sum + Number(item), 0);
};
