//Write a JavaScript function to get the week's start date.

function getWeekStartDate(date) {

    let weekday = date.getDay();
    let adjustedDate = date
    adjustedDate.setDate(adjustedDate.getDate() - weekday);

    
    return adjustedDate;
}

console.log(getWeekStartDate(new Date("2024-01-11")));