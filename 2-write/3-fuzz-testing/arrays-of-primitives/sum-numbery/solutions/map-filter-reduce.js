export const mapFilterReduce = (arr) => {
    // these work, you need to pass them to the right array methods
    const isNotNaN = (entry) => !Number.isNaN(entry);
    const sumNumbers = (acc, next) => acc + next;
    const castToNumber = (entry) => Number(entry);

    // fill in the array methods and pass in the correct logic
    const allValidNumbers = arr
        .map(castToNumber)
        .filter(isNotNaN)
        .reduce(sumNumbers, 0);

    return allValidNumbers;
};
