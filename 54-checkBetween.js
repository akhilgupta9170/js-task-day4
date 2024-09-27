//Write a JavaScript function to check if a given date is between two other dates.

function isDateBetween(date, startDate, endDate) {
    let start = new Date(startDate);
    let end = new Date(endDate);
    let givenDate = new Date(date);
    return givenDate >= start && givenDate <= end;
}

console.log(isDateBetween("2021-05-15", "2021-05-01", "2021-05-30"));