//Write a JavaScript function that ensures an asynchronous function is only executed once, even if it is called multiple times in rapid succession.

function execution(fn){

    let isCalled = false;

    return function(){
        if(!isCalled){
            isCalled = true;
            fn();
        }
    
} 
}




function asynchronousFunction(){
    return new Promise((resolve, reject) => {
        let succes = true;
        if(succes){
            resolve('Async function executed');
        }
        else{
            reject('Async function failed');
        }
        
    })
}

execution(asynchronousFunction)