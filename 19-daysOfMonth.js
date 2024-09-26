//Write a JavaScript function to get the day of the month, 2 digits with leading zeros.


function getDayOfMonth(date) {
    let day = new Date(date).getDate();
    if(day<10){
        day = "0"+day;
        return day;
    }else{
        return day;
    }


}


console.log(getDayOfMonth("2014-5-1"));
