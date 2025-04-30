////async await>>promise chains>>callback hells

//Synchronous
//Synchronous means the code runs in a particular sequence of instruction given in a program.
//Each instruction wait for the previous instruction to complete its execution.


console.log("one");
console.log("two");


//Asnchronous
//due to synchronization programming,sometime imp instructions get
//blocked due to some previous instructions,which causes a delay in the UI.
//asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.

setTimeout(()=>{
    console.log("hello")
},4000); //timeout;

console.log("three");
console.log("four");