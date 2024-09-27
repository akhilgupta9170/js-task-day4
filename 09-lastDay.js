// Write a JavaScript function to get the last day of a month.

function lastDay(year, month) {
  return new Date(year, month + 1, 0).getDate();
}
console.log("last Day is===>",lastDay(2014, 0));
console.log("last Day is===>",lastDay(2014, 1));
console.log("last Day is===>",lastDay(2014, 11));
