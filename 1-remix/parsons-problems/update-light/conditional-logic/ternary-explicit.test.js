/* https://www.codewars.com/kata/reviews/5ad7a2f9d478efb77200296d/groups/5ad9bc6a0be029ab0800071b */

/* this exercise has 2 distractors */

function updateLight(current) {
  return current === 'yellow'
    ? 'red'
    : current === 'green'
    ? 'yellow'
    : 'green';
}

describe('updateLight', () => {
  it('green to yellow', () => {
      expect(updateLight('green')).toEqual('yellow');
  });

  it('from yellow to red', () => {
      expect(updateLight('yellow')).toEqual('red');
  });

  it('from red to green', () => {
      expect(updateLight('red')).toEqual('green');
  });

  it('green when given an invalid current light', () => {
      expect(updateLight('invalid')).toEqual('green');
  });
});