// Write a JavaScript function to get the difference between Greenwich time (GMT) and in hours.\


function getGreenwichTimeDifference(dt){
      let hours = new Date(dt).getTimezoneOffset() / 60;
      return hours

}

console.log(getGreenwichTimeDifference("2022-01-01T00:00:00Z"))