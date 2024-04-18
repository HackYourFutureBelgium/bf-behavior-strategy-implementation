/* https://www.codewars.com/kata/reviews/58677f75395d91ce1d000576/groups/607972557b9a3d0001e17286 */

const addArrays = (arr1, arr2) => {
    if (arr1.length !== arr2.length) throw ('not same length');
    return arr1.map((item, i) => arr1[i] + arr2[i]);
};

describe('addArrays', () => {
    it('[1, 2], [4, 5] -> [5, 7]', () => {
        expect(addArrays([1, 2], [4, 5])).toEqual([5, 7]);
    });

    it('[-1, 3, 8], [10, 2, -5] -> [9, 5, 3]', () => {
        expect(addArrays([-1, 3, 8], [10, 2, -5])).toEqual([9, 5, 3]);
    });

    it(' [0], [0] -> [0]', () => {
        expect(addArrays([0], [0])).toEqual([0]);
    });

    it('should throw an error ', () => {
        expect(() => addArrays([1, 2], [4])).toThrow('not same length');
    });

    it('should throw an error', () => {
        expect(() => addArrays(['a'], ['b', 'c'])).toThrow('not same length');
    });
});