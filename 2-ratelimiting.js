//Write a JavaScript function that limits the number of times a callback function can be called in a given time frame (rate limiting).




function rateLimiter(fn, times,wait){
    let isCalled = false;
    return function(){
        if(!isCalled){
            fn();
            isCalled = true;
            setTimeout(()=>{
                isCalled = false;
            }, 10000)
        }
    }
    // let count = 0;
    // let timer;
    // return function(){         
    //     count++;
    //     if(count <= times){
    //         fn();
            
    //     } else{
    //         clearTimeout(timer);
    //         console.log("Rate limit exceeded");
    //     }
    // }
    
    
    }

function print(){
    console.log("Hello");

}


const limitedPrint = rateLimiter(print,5,10000);

limitedPrint();



