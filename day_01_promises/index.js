const muPromise = new Promise((resolve, reject) => 
    {
    let marks = 75;
    if (marks > 33) {
        resolve("pass");
    } else {
        reject("fail");
    }
})
myPromise.then(msg)=>console.log(msg).catch