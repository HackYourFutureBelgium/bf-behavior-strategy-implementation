// A "happy" number is defined as follows:

// Start with any positive integer.
// Replace the number with the sum of the squares of its digits.
// Repeat the process until the resulting number becomes 1,
// or it enters a cycle that does not include 1.
// If the process ends with 1, then the original number is considered a happy number.

export const happy = (number) => {
    const noneOfThese = new Array(1000).fill(false);

    while (number !== 1 && !noneOfThese[number]) {
        let next = 0;
        const numerals = Array.from(String(number));

        for (let i = 0; i < numerals.length; i++) {
            next += Math.pow(Number(numerals[i]), 2);
        }

        noneOfThese[number] = true;
        number = next;
    }

    return number === 1;
};
