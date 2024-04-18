/* https://www.codewars.com/kata/reviews/5ad7a2f9d478efb77200296d/groups/5ad7addd0646981db800307b */

function updateLight(current) {
  if (current === 'green') {
      return 'yellow';
  }
  if (current === 'yellow') {
      return 'red';
  }
  if (current === 'red') {
      return 'green';
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
