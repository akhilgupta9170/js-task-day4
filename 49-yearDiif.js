//Write a JavaScript function to get time differences in years between two dates

function getYearDifference(date1, date2) {
    let diffInMs = Math.abs(date2 - date1);
    let diffInYears = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 365));
    return diffInYears;
}

console.log(getYearDifference(new Date("October 13, 2014 08:11:00"), new Date("October 14, 2015 11:13:00")))
