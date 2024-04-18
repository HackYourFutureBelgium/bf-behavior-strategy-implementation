/* https://www.codewars.com/kata/reviews/58677f75395d91ce1d000576/groups/5d6a8a05c968e80001066720 */

/* this exercise has 0 distractors */

function addArrays(array1, array2) {
    var len = array1.length;

    if (len === array2.length) {
        for (var i = 0; i < len; i++) {
            array1[i] += array2[i];
        }

        return array1;
    }

    throw new Error('Array lengths not same size');
}

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
        expect(() => addArrays([1, 2], [4])).toThrow('Array lengths not same size');
    });

    it('should throw an error', () => {
        expect(() => addArrays(['a'], ['b', 'c'])).toThrow('Array lengths not same size');
    });
});


