/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/57f94b0a2faf02e74c000557 */

/* this exercise has 3 distractors */

function removeExclamationMarks(s) {
  return s.replace(/!/gi, '');
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

