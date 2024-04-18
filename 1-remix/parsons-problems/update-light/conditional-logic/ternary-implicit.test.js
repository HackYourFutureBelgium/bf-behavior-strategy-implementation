/* https://www.codewars.com/kata/reviews/5ad7a2f9d478efb77200296d/groups/5b16df8ca6d5f9f11e000a41 */

const updateLight = (current) => {
    return current == 'green'
        ? 'yellow'
        : current == 'yellow'
        ? 'red'
        : 'green';
};

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