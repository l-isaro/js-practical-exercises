function oddSquares(arr) {
  return arr.filter((e) => e % 2 === 1).map((e) => e ** 2);
}
