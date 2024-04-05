function convertNullableValues(obj) {
  for (const property in obj) {
    if (obj[property] === null) {
      obj[property] = 0;
    }
    if (obj[property] === undefined) {
      obj[property] = "";
    }
  }
  return obj;
}
