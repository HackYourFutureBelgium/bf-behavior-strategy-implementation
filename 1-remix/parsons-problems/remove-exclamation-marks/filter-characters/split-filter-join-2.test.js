/* https://www.codewars.com/kata/reviews/57f74e99c2128af9130000d8/groups/5cd2a41a7c59b20001be8dda */

/* this exercise has 3 distractors */

let removeExclamationMarks = (s) =>
  s
    .split('')
    .filter((e) => e != '!')
    .join('');



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
