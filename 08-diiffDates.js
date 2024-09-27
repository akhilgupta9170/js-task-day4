//Write a JavaScript function to check whether an `input` is a date object or not.

const isDate = function (input) {
  return input instanceof Date && !isNaN(input);
};

console.log("result is====>",isDate("October 13, 2014 11:13:00"));
console.log("result is====>",isDate(new Date(86400000)));
console.log("result is====>",isDate(new Date(99, 5, 24, 11, 33, 30, 0)));
console.log("result is====>",isDate([1, 2, 4, 0]));
console.log("result is====>",isDate(new Date("invalid date")));
