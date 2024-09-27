//Write a JavaScript function to get the difference between two dates in day

function getDifferenceInDays(date1, date2) {
     date1 = new Date(date1);
     date2 = new Date(date2);
    //  console.log(date1.getTime())
    let diffInMilliseconds = Math.abs(date2.getTime() - date1.getTime());
    let diffInDays = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24));
    return diffInDays;
}


console.log(getDifferenceInDays('04/02/2014', '11/04/2014'));
console.log(getDifferenceInDays('12/02/2014', '11/04/2014'));








