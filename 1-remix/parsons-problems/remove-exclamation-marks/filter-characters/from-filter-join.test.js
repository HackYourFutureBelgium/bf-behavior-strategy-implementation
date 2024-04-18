/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/60c5857682a32d000154e5ef */

/* this exercise has 2 distractors */

function removeExclamationMarks(s) {
  const result = Array.from(s).filter((element) => {
    return element !== '!';
  });
  return result.join('');
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
