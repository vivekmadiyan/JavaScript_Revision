let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newGameBtn=document.querySelector("#new")
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO =true;
let winingPattern=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

boxes.forEach((box)=>{
box.addEventListener("click",()=>{
    console.log("box was clicked")
    if(turnO){
    box.innerText="O"
    turnO=false;
    }
    else{
        box.innerText="X"
        turnO=true;
    }
    box.disabled=true;
    checkWinner();
})
})
const checkWinner=()=>{
for(let pattern of winingPattern){
  let pos1Val=boxes[pattern[0]].innerText;
  let pos2Val=boxes[pattern[1]].innerText;
  let pos3Val=boxes[pattern[2]].innerText;
  
  if(pos1Val !="" && pos2Val!="" && pos3Val !=""){
    if(pos1Val=== pos2Val && pos2Val===pos3Val){
        console.log("winner",pos1Val);
        
        showWinner(pos1Val);
    }
  }
}
}
const disable=()=>{
  for(let box of boxes){
    box.disabled=true;
  }
}

const showWinner=(winner)=>{
  msg.innerText=`Congratulations , winner is ${winner}`
  msgContainer.classList.remove("hide");
  disable();
}

const resetGame=()=>{
turnO=true;
enabled();
msgContainer.classList.add("hide");
}
const enabled=()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
}

newGameBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame)