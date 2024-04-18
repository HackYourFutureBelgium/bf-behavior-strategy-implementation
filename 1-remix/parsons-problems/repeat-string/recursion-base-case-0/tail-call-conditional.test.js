/* 2 extra lines */

/* parsons-collapse: recursion with base-case 0

  i'm using 0 as the base-case because that is the fewest possible repetitions
  zero repetitions is an empty string, so if repetitions is 0 it will return ''

  otherwise i'll need to combine the text with a string that has one fewer reptitions

  repeatString(text, repetitions) =>
    base-case: repetitions is 0
      return: an empty string
    recursive case: repetitions is greater than 0
      nextRepetitions = subtract one from repetitions
      recursedValue = recursively call repeatString with text and nextRepetitions
      return: text + recursedValue

*/

const repeatString = (text = '', repetitions = 1, repeated = '') => {
    if (repetitions === 0) {
        return repeated;
    } else {
        const nextRepeated = repeated + text;
        const nextRepetitions = repetitions - 1;
        return repeatString(text, nextRepetitions, nextRepeated);
    }
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
