//Write a JavaScript function that performs asynchronous tasks in parallel but stops and rejects as soon as one of the tasks fails
function asynchronousTask(wait){
    return new Promise((resolve, reject) => {
        setTimeout(() =>resolve(),wait)
    });
}

let promiseArray =[asynchronousTask(1000),asynchronousTask(2000),asynchronousTask(3000)]
Promise.all(promiseArray)
    .then(values => console.log('All tasks completed successfully'))
    .catch(error => console.error('One or more tasks failed'));