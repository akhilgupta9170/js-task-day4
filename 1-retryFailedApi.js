function getUserInfo(retry = 5){
    return new Promise((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/posts/ 1")
       .then(response => {
         if(!response.ok){
            const retriesLeft = retry-1;
            
            if(retry == 0)  {
                console.log("Rejecting")
              return  reject("Error fetching the post")
            }

            console.log(`Retrying... Attempt ${retriesLeft}`);
            return getUserInfo(retriesLeft);
         }
         return resolve(response.json())
       })
       .catch(error => {
            console.error(`Max retries reached: ${error}`);
            reject(error);
       });
    })
}
 
getUserInfo()
.then(response => console.log(response))
.catch(error => console.error(error));