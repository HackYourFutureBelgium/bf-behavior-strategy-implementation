/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/60c3b87b60eaa400010537e8 */

/* this exercise has 2 distractors */

function removeExclamationMarks(s) {
    while (s.includes('!')) {
        let index = s.indexOf('!');
        s = s.slice(0, index).concat(s.slice(index + 1, s.length));
    }

    return s;
}

describe('remove exclamation marks from a string', () => {
    it('Hi!  -> Hi', () => {
        expect(removeExclamationMarks('Hi!')).toEqual('Hi');
    });
  
    it('to be! or not to be! -> to be or not to be', () => {
        expect(removeExclamationMarks('to be! or not to be!')).toEqual('to be or not to be');
    });
    it('hello!!!!!!!!!! -> hello', () => {
        expect(removeExclamationMarks('hello!!!!!!!!!!')).toEqual('hello');
    });
  });
  
