/* https://www.codewars.com/kata/reviews/5ad7a2f9d478efb77200296d/groups/5ae5f73d2df0a959bf00141f */

/* this exercise has 2 distractors */

function updateLight(current) {
  if (current === 'green') {
    return 'yellow';
  } else if (current === 'yellow') {
    return 'red';
  }
  return 'green';
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