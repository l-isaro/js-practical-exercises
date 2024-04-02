function arrayStats(arr) {
  let arrayDetails = {
    sum: arr.reduce((acc, value) => {
      return acc + value;
    }, 0),
    average:
      arr.reduce((acc, value) => {
        return acc + value;
      }, 0) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
  };
  return arrayDetails;
}
