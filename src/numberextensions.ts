interface Math {
  toRadian(value: number): number;
  toDegree(value: number): number;
}

Math.toRadian = function(value: number) {
  return value * (Math.PI / 180);
};

Math.toDegree = function(value: number) {
  return value * (180 / Math.PI);
};
