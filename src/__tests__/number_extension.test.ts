import '../numberextensions';

test('Radian Test', () => {
  const val = Math.toRadian(180);
  expect(val).toBe(3.141592653589793);
});

test('Degree Test', () => {
  const val = Math.toDegree(3.141592653589793);
  expect(val).toBe(180);
});
