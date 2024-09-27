//Write a JavaScript function to add specified years to a date.

function addYears(date, year) {
    let newDate = new Date(date);
    newDate.setFullYear(newDate.getFullYear() + year);
    return newDate;


}

console.log(addYears("2015-11-1", 5));
