interface Math {
  toRadian(value: number): number;
}

Math.toRadian = function(value: number) {
  return value * (Math.PI / 180);
};
