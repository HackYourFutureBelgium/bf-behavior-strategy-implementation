const happy = (number) => {
    debugger;
    const noneOfThese = new Set();

    while (number && number !== 1 && !noneOfThese.has(number)) {
        const digits = String(number).split('');
        number = digits.reduce((sum, digit) => sum + digit * digit, 0);
        noneOfThese.add(number);
    }

    return number === 1;
};

happy(19);
