// A "happy" number is defined as follows:

// Start with any positive integer.
// Replace the number with the sum of the squares of its digits.
// Repeat the process until the resulting number becomes 1,
// or it enters a cycle that does not include 1.
// If the process ends with 1, then the original number is considered a happy number.

export const happy = (number) => {
    const noneOfThese = new Set();

    while (number && number !== 1 && !noneOfThese.has(number)) {
        const digits = String(number).split('');
        number = digits.reduce((sum, digit) => sum + digit * digit, 0);
        noneOfThese.add(number);
    }

    return number === 1;
};
