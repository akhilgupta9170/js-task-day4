//Write a JavaScript function to get the month end date.

function getMonthEndDate(date) {
    let month = new Date(date);
    console.log(month)
    month.setMonth(month.getMonth() + 1);
    console.log(month)
    month.setDate(0);
    return month;
}

console.log(getMonthEndDate(new Date("2024-01-11")));
