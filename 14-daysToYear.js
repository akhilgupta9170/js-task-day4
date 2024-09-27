//Write a JavaScript function to get the number of days in a year.

function daysInYear(year) {
  let firstDay = Date.parse(year);
  let lastDay = Date.parse(year + 1);
  diff = lastDay - firstDay;
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

console.log(daysInYear(2020));
