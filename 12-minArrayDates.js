//Write a JavaScript function to get the minimum date from an array of dates.

function getMinimum(dates) {
  let min = new Date(dates[0]);
  for (let i = 1; i < dates.length; i++) {
    let currentDate = new Date(dates[i]);
    if (currentDate < min) {
      min = currentDate;
    }
  }
  return min;
}
console.log(getMinimum(["2015/02/01", "2015/02/02", "2015/01/03"]));
