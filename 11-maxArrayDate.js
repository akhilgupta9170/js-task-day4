//Write a JavaScript function to get the maximum date from an array of dates.
function getMaxDate(dates) {
  let maxDate = new Date(dates[0]);
  for (let i = 1; i < dates.length; i++) {
    let currentDate = new Date(dates[i]);
    if (currentDate > maxDate) {
      maxDate = currentDate;
    }
  }
  return maxDate.toDateString();
}

console.log(getMaxDate(["2020-01-01", "2020-05-01", "2020-03-01"]));
console.log(getMaxDate(["2015/02/01", "2015/02/02", "2015/01/03"]));
