//Write a JavaScript function to add specified months to a date.

function addMonths(date, month) {
  let newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() + month);
  return newDate.toDateString();
}

console.log(addMonths("2015-11-1", 5));
