/* https://www.codewars.com/kata/reviews/5ad7a2f9d478efb77200296d/groups/5aeadb48a8d2b32b8a0024e6 */

/* this exercise has 1 distractor */

const updateLight = (current) => {
  return {
    green: 'yellow',
    yellow: 'red',
    red: 'green',
  }[current];
};


describe('updateLight function', () => {
  test('should return "yellow" when current color is "green"', () => {
    const result = updateLight('green');
    expect(result).toBe('yellow');
  });

  test('should return "red" when current color is "yellow"', () => {
    const result = updateLight('yellow');
    expect(result).toBe('red');
  });

  test('should return "green" when current color is "red"', () => {
    const result = updateLight('red');
    expect(result).toBe('green');
  });


  test('should return undefined when current color is not valid', () => {
    const result = updateLight('blue');
    expect(result).toBeUndefined();
  });
});