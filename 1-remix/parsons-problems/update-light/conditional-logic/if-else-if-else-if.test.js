/* https://www.codewars.com/kata/reviews/5ad7a2f9d478efb77200296d/groups/5ad7d8162a7ead8112001f29 */

/* this exercise has 2 distractors */

function updateLight(current) {
  if (current === 'green') {
    return 'yellow';
  } else if (current === 'yellow') {
    return 'red';
  } else if (current === 'red') {
    return 'green';
  }
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