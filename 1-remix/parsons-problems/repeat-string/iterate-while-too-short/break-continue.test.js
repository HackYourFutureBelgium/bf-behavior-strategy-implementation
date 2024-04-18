/* 4 extra lines */

/* parsons-collapse: iterating until the new string's length is correct

  repeatString(text, repetitions) =>
    1. calculate the final length for the new string
    2. create a new string to fill with many text's
    3. iterate as long as the new string is too short
      a. check if the new string is long enough
        stop if it is, keep going if it is not
      b. append text to the new
      c. repeat
    return: the new repeated string

*/

const repeatString = (text = '', repetitions = 1) => {
  const finalLength = text.length * repetitions;
  let repeatedText = '';
  while (true) {
      if (repeatedText.length === finalLength) {
          break;
      }
      repeatedText += text;
  }
  return repeatedText;
};


describe('repeatString', () => {
  it('hello, 2 -> hellohello', () => {
      expect(repeatString('hello', 2)).toEqual('hellohello');
  });
  it('hi , 5 -> hihihihihi', () => {
      expect(repeatString('hi', 5)).toEqual('hihihihihi');
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