//28. Write a JavaScript function to get a full numeric representation of a year (4 digits).

function getYear(date){
    let year = new Date(date).getFullYear();
    console.log(year);
    return year;
}


console.log(getYear("2015-11-1"))
