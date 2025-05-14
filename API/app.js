////FETCH API
//api- appliocation programming interface
//the fecth api provide an interface for fetching (sending/recieving) resources.
//IT USES Request and Response objects.
//the fetch() method is used to fetch a resource (data).

//let promise=fetch(url,[options])

// const URL ="https://api.thecatapi.com/v1/images/search";


// const getImg= async()=>{
//     console.log("getting data....")
//     let response=await fetch(URL);
//     let data=await response.json();

//     //create an image element and set its source
//     let imgElement = document.createElement("img");
//     imgElement.src = data[0].url;
//     imgElement.alt = "Random Cat Image";

//     // Append the image to the body or another element
//     document.body.appendChild(imgElement);
   

// }
// getImg();

////Understanding Terms
//AJAX is Asynchronous js & xml
//JSON is javascript Object Notation
//json() method : returns a second promise that resolve with the result of parsing
//the response body text as JSON.(Input is JSON, output is js obj.)
//we get response in JSON and now we have convert it using json() method.

// //Random Joke Generator
// const fact=document.querySelector("#fact");
// const fact1=document.querySelector("#fact1");
const URL="https://official-joke-api.appspot.com/jokes/random";


// const getJoke=async()=>{
// console.log("getting data.....")
// let response= await fetch(URL);
// let data=await response.json();
// console.log(data.setup);  // ✅ Accessing joke setup (question)
// console.log(data.punchline); 
// fact.innerText=data.setup; // ✅ Accessing punchline (answer)
// fact1.innerText=data.punchline;

// }

//Using Callback Hell
// function getJoke(){
//     fetch(URL).then((response)=>{
//         return response.json();
//     }).then((data)=>{
//         console.log(data.setup) // ✅ Accessing joke setup (question)
//         console.log(data.punchline)
//     })
// }

// getJoke();


////Requests & Response
//Http Verbs
//Response Status Code(https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status)
//GET,POST,PUT,DELETE,ETC.
//TO LEARN HOW TO SEND POST REQUEST. (FETCH(URL,OPTIONS))


