/* https://www.codewars.com/kata/reviews/58677f75395d91ce1d000576/groups/60c649d3408198000190aec2 */

function addArrays(a1, a2) {
    if (a1.length !== a2.length) throw new Error('arrays have different length');
    return a1.map((v, i) => v + a2[i]);
}

    describe('addArrays', () => {
    it('[1, 2], [4, 5] -> [5, 7]', () => {
        expect(addArrays([1, 2], [4, 5])).toEqual([5, 7]);
    });


        it('[1, 2], [3, 4] -> [4, 6]', () => {
            expect(addArrays([1, 2], [3, 4])).toEqual([4, 6]);
        }); 

        it('[-2, 3, 1], [8, 2, 1] -> [6, 5, 2]', () => {
            expect(addArrays([-2, 3, 1], [8, 2, 1])).toEqual([6, 5, 2]);
        });
    
        it(' [0], [0] -> [0]', () => {
            expect(addArrays([0], [0])).toEqual([0]);
        });

        it('should throw an error', () => {
            expect(() => addArrays([4], [4, 3])).toThrow(
                'arrays have different length',
                );
            });
        });
