/* https://www.codewars.com/kata/reviews/5ad7a2f9d478efb77200296d/groups/5e249517427162000136e463 */

/* this exercise has 1 distractors */

function updateLight(current) {
    const lights = ['green', 'yellow', 'red'];
    const newLightIndex = lights.indexOf(current) + 1;
    return newLightIndex < 3 ? lights[newLightIndex] : lights[0];
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