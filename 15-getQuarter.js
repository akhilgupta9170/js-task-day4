//Write a JavaScript function to get the quarter (1 to 4) of the year.

function getQuarter(date) {
  let month = new Date(date);
  // console.log(month.getMonth())
  let quarter = Math.ceil((month.getMonth() + 1) / 3);
  return quarter;
}
console.log(getQuarter("2014-5-10"));
