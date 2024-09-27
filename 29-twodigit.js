//Write a JavaScript function to get a two-digit year representation.
function getYear(date) {
  let year = new Date(date).getYear();
  let twoDigit = year % 100;
  return twoDigit;
}

console.log(getYear("2015-11-1"));
