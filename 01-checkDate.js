function checkDate(str){
    let date = new Date(str);
    console.log(date);
    if(isNaN(date.getTime())){
        return false;
    }
    return true;
}

console.log(checkDate("new Date(86400000))"));