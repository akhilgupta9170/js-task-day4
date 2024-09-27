//Write a JavaScript function to count the number of days passed since the year began.

function passedDays(date){
    let  current = new Date(date);
    // console.log(current.getTime())
    console.log(current)
    let startYear = new Date(current.getFullYear(),0,1);
    console.log(startYear)
    let diff = current - startYear+1;
    // console.log(diff)
    return Math.floor(diff/(1000*60*60*24))

}

console.log(passedDays("2020-1-10"))     // incomplete 