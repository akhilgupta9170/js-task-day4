//Write a JavaScript function to add specified weeks to a date.

function addWeeks(date, week) {
  let newDate = new Date(date);
  newDate.setDate(newDate.getDate() + week * 7);
  return newDate;
}

console.log(addWeeks("2024-01-01", 2));
