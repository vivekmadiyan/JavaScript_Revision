////DOM(html code acccesed in js / all html elements are acessible/to change dynamically)
//when a web page is loaded, the browser creates a document object model of page);
  //window
  //document
   //html
     //
  //   //
//head   //body
// console.log for print
////to access elements using id
// let heading=document.getElementById("heading"); //h1
// console.log(heading)
////to acess elements usinG Class 
// let heading=document.getElementByClassName("heading");
// console.log(heading)
////to access elements using tagname
// let heading=document.getElementsByTagName("p");
// console.log(heading)

////QUERY SELECTOR
//document.querySelector("myId/myClass/tag") //returns first element
//document.querySelectorAll("myId/myClass/tag")//returns a nodeList
// let elements=document.querySelector("p")//first para
// console.dir(elements)

// let elementsAll=document.querySelectorAll("p")//all para
// console.dir(elementsAll)

// let elements=document.querySelector(".heading")//first para
// console.dir(elements)

// let elements=document.querySelector("#heading")//first para
// console.dir(elements)

////DOM Manpulation Properties 
// tagName: returns tag for element nodes
// innerText: returns the text content of the element and all its children
// innerHtml:returns the plain text or Html   contents in  the elements 
// textContent: returns textual content even for hiddenelements
// console.dir(document.body.firstChild)
// let element=document.querySelector("div")
// console.log(element)


// let element=document.querySelector("h2");
// element.innerText=element.innerText+" from Vivek";

// let element=document.querySelectorAll(".box");
// element[0].innerText="hvhjfhff"
// element[1].innerText="bcvhgcvuy"
// element[2].innerText="bvhgchk"

// let div=document.querySelector("div")
// div.style.backgroundColor="red";
// console.log(div)

// div.setAttribute("id","box")
// let id=div.getAttribute("id")
// console.log(id)
// let newButton = document.createElement("button");
// newButton.innerText = "Click Me!";
// newButton.style.backgroundColor = "red";
// newButton.style.color = "white";

// document.querySelector("body").prepend(newButton);

///EVENTS(The change in the state of an object is knowmn as event. )
//-mouse events
//-keyboard events
//-form events
//print event 
////js event handle
//-if there is inline event and js event handling then priority given to js event 
//if we make more than one handler of same operation than the last one will run
// let btn1=document.querySelector("#btn1");
// btn1.onclick=(e)=>{
//   console.log(e.type);
//   console.log(e.target);
//   console.log(e.clientX,e.clientY);
// }
////EVENT OBJECT
//node.event=(e)=>{
  //handle here}
//-e.target
//-e.type
//-e.clientX
//-e.clientY

////EVENT LISTENERS
//node.addEventListener(event,callaback)
//node.removeEventListener(event,callaback)
// let btn1=document.querySelector("#btn1");
// btn1.addEventListener("click",()=>{
//   console.log("btn was clicked 1")
// })

// btn1.addEventListener("click",()=>{
//   console.log("btn was clicked 2")
// }) 
// const handler3=()=>{
//   console.log("btn was clicked 3")
// }
// btn1.addEventListener("click",handler3) 

// btn1.addEventListener("click",()=>{
//   console.log("btn was clicked 4")
// }) 

// btn1.removeEventListener("click",handler3);

////TOGGLE(switch between states)
// let modeBtn=document.querySelector("#mode")
// let currMode="light"

// modeBtn.addEventListener("click",()=>{
//   if(currMode==="light"){
//     currMode="dark";
//     document.querySelector("body").style.backgroundColor="black"
//   }
//   else{
//     currMode="light";
//     document.querySelector("body").style.backgroundColor="white"
//   }
//   console.log(currMode)
// })

