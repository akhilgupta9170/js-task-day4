// . Write a JavaScript function to get the week end date.

function getWeekEndDate(date) {
    let weekday=date.getDay();
    let newDate = date;
    newDate.setDate(newDate.getDate() + (6 - weekday));
    return newDate;


}

console.log(getWeekEndDate (new Date("2024-01-11")));
