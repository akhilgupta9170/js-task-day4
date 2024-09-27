//Write a JavaScript function that takes an array of Promises and resolves them in batches of a given size.

function arrayToPromise(promises){
    let result = [];
    let currentIndex = 0;
    let batchSize = 2;

    function batching() {
        let batch = promises.slice(currentIndex, currentIndex + batchSize);
        currentIndex += batchSize;

        if (batch.length === 0) {
            return Promise.resolve(result);
        }

        return Promise.all(batch)
           .then(values => {
                result.push(...values);
                return batching();
            });
    }

    return batching();

}
// Test the function
const promises = [Promise.resolve(1),Promise.resolve(2),Promise.resolve(3),Promise.resolve(4),Promise.resolve(5)];

arrayToPromise(promises)
   .then(values => console.log(values))
   .catch(err => console.error(err));


 

