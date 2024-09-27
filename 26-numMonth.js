// Write a JavaScript function to get a numeric representation of a month, with leading zeros (01 through 12).

function getMonth(date){
    let month =new Date(date).getMonth();
    console.log(month);
    if(month<9)
        return "0"+month;
    return month+1;
}


console.log(getMonth("2015-11-1"))
