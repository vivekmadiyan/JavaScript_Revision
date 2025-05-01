////async await>>promise chains>>callback hells

//Synchronous
//Synchronous means the code runs in a particular sequence of instruction given in a program.
//Each instruction wait for the previous instruction to complete its execution.


// console.log("one");
// console.log("two");


//Asnchronous
//due to synchronization programming,sometime imp instructions get
//blocked due to some previous instructions,which causes a delay in the UI.
//asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.

// setTimeout(()=>{
//     console.log("hello")
// },4000); //timeout;

// console.log("three");
// console.log("four");

////Callbacks
// (a callback is a agruement to another function )
// function sum(a,b){
// console.log(a+b);
// }
// function calculator(a,b,sumCallback){
//   sumCallback(a,b)
// }

// calculator(1,2,(a,b)=>{
//     console.log(a+b);
// })

// const hello=()=>{
//     console.log("hello");

// }

// setTimeout(hello,2000);

// setTimeout(()=>{
//     console.log("hello");
// },4000);

////Callback Hell
// (nested callbaks)

// function getData(dataId,getnextData){
//     setTimeout(()=>{
//     console.log("data", dataId); 
//     if(getnextData){
//         getnextData();
//     }
   
//     },2000);
// }

// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4);
//         });
//     });
//})
//This is nested callback and formed a pyramid structure.

////PROMISISES(TO SOLVE CALLBACK HELLS)
//promise is for "eventual" completion of task.it is an object in js.
//it is a solution for callback hell.
//let promise=new Promise(resolve,reject)=>{....}//function with two handlers.
//resolve and reject are callbacks provided by js.
//pending,fulfilled,rejcted.
//  let promise=new Promise((resolve,reject)=>{
//   console.log("sucess");
// //   resolve(123);
//   reject("some error");
//  })

//  function getData(dataId,getnextData){
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//     console.log("data", dataId); 
//     // reject("error")
//     resolve("sucess");
//     if(getnextData){
//         getnextData();
//     }
//     },5000);
//     });
//  }

////To use Promises(.then(),.catch())
// promise.then((res)=>{....})//after resolve
// promise.catch((res)=>{....})//after rejected

const getPromise=()=>{
    return new Promise((resolve,rejected)=>{
        resolve("success");
        rejected(error);
    })
}

let promise=getPromise();
promise.then((res)=>{
    console.log("promise fulfilled",res);
})

promise.catch((err)=>{
    console.log("promise rejected",err);})