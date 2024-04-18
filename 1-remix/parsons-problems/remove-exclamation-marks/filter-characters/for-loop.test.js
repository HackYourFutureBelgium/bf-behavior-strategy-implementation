/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/60c61d06679fb30001ffe32f */

/* this exercise has 3 distractors */

function removeExclamationMarks(s) {
  var newString = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] != '!') {
      newString += s[i];
    }
  }
  return newString;
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
  