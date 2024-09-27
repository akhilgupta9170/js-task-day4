//Write a JavaScript function that delays the execution of a Promise-based function until a condition is met.
function conditionCheck() {
  // Simulate condition check
  return Math.random() > 0.5; // Randomly return true or false for condition check
}

function delayPromise(conditionCheckFn, delay = 1000) {
  return new Promise(function (resolve) {
    // setTimeout(conditionCheckFn,delay)
    let stop = setInterval(() => {
      let isCheck = conditionCheckFn();
      console.log("check", isCheck);
      if (isCheck) {
        resolve("Condition met");
        clearInterval(stop);
      }
    }, delay);
  });
}
delayPromise(conditionCheck)
  .then((data) => console.log("data====>",data))
  .catch((err) => console.log("data====>",err));
