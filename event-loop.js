console.log("syncronous_1");

setTimeout(function timeout(){
    console.log("syncronous_1")
},5000);


console.log("syncronous_2");

setTimeout(function timeout(){
    console.log("syncronous_2")
},5000);


console.log("syncronous_3");

// async function f() {
//     let result = 'first!';
//     let promise = new Promise((resolve, reject) => {
//       setTimeout(() => resolve('done!'), 1000);
//     });
//     result = await promise;
//     console.log(result);
//   }
//   f();