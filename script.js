const prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task is completed");
        let error = false
        if (!error) {
            resolve({ username: "Hyper", email: "supernoob7903@gmail.com" });
        }
        else {
            reject("Something went wrong")
        }
    }, 1000);
})

async function promise5() {
    try {
        const promise = await prom
    console.log(promise);
    
    } catch (error) {
        console.log(error);
        
    }
}
promise5()