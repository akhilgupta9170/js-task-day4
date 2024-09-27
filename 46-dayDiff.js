//Write a JavaScript function to get time differences in days between two dates.

function getDayDifference(date1, date2) {
    let diffInMs = Math.abs(date2 - date1);
    let diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    return diffInDays;
}

console.log(getDayDifference(new Date("October 13, 2014 08:11:00"), new Date("October 14, 2014 11:13:00")))