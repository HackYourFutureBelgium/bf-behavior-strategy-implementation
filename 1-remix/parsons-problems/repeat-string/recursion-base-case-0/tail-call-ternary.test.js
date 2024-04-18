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

// prettier-ignore
const repeatString = (text = '', repetitions = 1, repeated = '') =>
  repetitions === 0
    ? repeated
    : repeatString(text, repetitions - 1, repeated + text);

? '' // distractor
: repeatString(text, repetitions - 1); // distractor

const repeatString = require('./repeatString'); // Assuming the function is in a separate file


describe('repeatString function', () => {
  it('should repeat the string "Hello" 3 times', () => {
    expect(repeatString('Hello', 3)).toBe('HelloHelloHello');
  });

 
  it('should repeat the string "abc" 5 times', () => {
    expect(repeatString('abc', 5)).toBe('abcabcabcabcabc');
  });

  
  it('should return an empty string when repetitions is 0', () => {
    expect(repeatString('123', 0)).toBe('');
  });

  
  it('should return an empty string when repetitions is negative', () => {
    expect(repeatString('xyz', -2)).toBe('');
  });

  
  it('should repeat the string "test" once by default', () => {
    expect(repeatString('test')).toBe('test');
  });


  it('should return an empty string by default', () => {
    expect(repeatString()).toBe('');
  });
});