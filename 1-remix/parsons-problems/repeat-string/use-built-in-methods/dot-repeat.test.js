/* 4 extra lines */

/* parsons-collapse: use built-in .js methods

  repeatString(text, repetitions) =>
    1. make sure the data is the correct type and format for the method you're using
    2. use the method
    return: the result

*/

const repeatString = (text = '', repetitions = 1) => {
  return text.repeat(repetitions);
};

describe('repeatString', () => {
  it('hello, 3 -> hellohellohello', () => {
      expect(repeatString('hello', 3)).toEqual('hellohellohello');
  });
  it('abc , 5 -> abcabcabcabcabc', () => {
      expect(repeatString('abc', 5)).toEqual('abcabcabcabcabc');
  });
  it('123, 2 -> 123123', () => {
      expect(repeatString('123', 2)).toEqual('123123');
  });

  it(' -> empty string', () => {
      expect(repeatString()).toEqual('');
  });

  it('hello, 0 -> empty string', () => {
      expect(repeatString('hello', 0)).toEqual('');
  });
});