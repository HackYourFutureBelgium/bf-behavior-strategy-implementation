/* https://www.codewars.com/kata/reviews/5ad7a2f9d478efb77200296d/groups/60743965cb7e980001c7bc44 */

/* this exercise has 2 distractors */

function updateLight(current) {
    const lights = ['green', 'yellow', 'red'];

    return current === 'red' ? 'green' : lights[lights.indexOf(current) + 1];
}

describe('updateLight', () => {
    it('green to yellow', () => {
        expect(updateLight('green')).toEqual('yellow');
    });

    it('from yellow to red', () => {
        expect(updateLight('yellow')).toEqual('red');
    });

    it('from red to green', () => {
        expect(updateLight('red')).toEqual('green');
    });

    it('green when given an invalid current light', () => {
        expect(updateLight('invalid')).toEqual('green');
    });
});
