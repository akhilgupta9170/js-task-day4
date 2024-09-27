//Write a JavaScript function to get the month's start date.

function monthsStart(date){
    let month = new Date(date).getMonth();
    let start = new Date(date);
    start.setDate(1);
    start.setMonth(month);
    return start

}
console.log(monthsStart("2014-01-15"));