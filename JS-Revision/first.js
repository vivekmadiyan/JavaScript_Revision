// q1
// let num=prompt("enter the number");
// if(number%5==0){
//     console.log("yes")
// }
 
//q2
// if(num>=90 && num<=100){
//     console.log("A")
// }
// else if(num>=70 && num<=89){
//     console.log("B")
// }
// else if(num>=60 && num<=69){
//     console.log("B")
// }
// else if(num>=50 && num<=59){
//     console.log("B")
// }
// else {
//     console.log("F")
// }

//LOOP
//intialiase let i=0 + stopping cond i<=5 and updation
//  for(let i=1;i<=5;i++){
//     console.log("vivek")
//  }
//  console.log("loop has end")

////calculate sum of 1 to 5
// let sum=0;
// for(i=1;i<=5;i++){
//   sum+=i;
// }
// console.log(sum);
 
////--infine loops never ends (if stopping condition is always true)
// for(let i=1;i>=0;i++){
//     console.log(i)
// }

//--WHILE LOOP
//   while(condition){

//   }

// let i=1;
// while(i<=5){
//     console.log("vivek");
//     i++;
// }
// let i=20; //condn is false
// while(i<=10){
//     console.log("vivek");
//     i++;
// }


////DO-WHILE(first time always run and then check condn)
// let i=10; 
// do{
//  console.log("vivek");
//  i++;
// }
// while(i<=5);

////for-of LOOP(to apply loop to add arrays and string)
// let str="VIVEKMADIYAN";
// let size=0;
// for(let i of str){//iterator
//     console.log(i);
//     size++;
// }
// console.log(size);


////for-in LOOP (used for objects and arrays only)--> keys of obj
// let obj={
//     name:"vivek",
//     age:22,
//     class:10
// };

// for(let i in obj){
//     console.log(i,obj[i]);
// }

////q-3
// print all even numbers from 0 to 100
// for(let i=0;i<=100;i++){
//     if(i%2==0){
//         console.log("even no is", i)
//     }
    
// }

// let gameNum=25;
// let userNum=prompt("enter your number");
// while(userNum!=gameNum){
//     userNum=prompt("you have entered wrong answer.guess again");
//    }

// console.log("congrulations you have guessed right")


///STRINGS(String is a sequence of characters used to represent text)
// let str="vivek";
// let str2='vivek';
//inbuilt properties of string :- length,indices

// console.log(str.length)//length
// console.log(str[0])

//TENPLATE LITERALS
// let specialString=`This is a template literal ${7+9}`;
// console.log(specialString)

//use of template literals with example
// let obj={
//     item:"Pen",
//     price:10
// };
//String interpolation (we add expressions in template )
// let output=`the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);
// console.log("the cost of",obj.item,"is",obj.price "rupees");

////Escape Characters
//->/n(necxt line) count as 1 in length
//->/t(tab space) count as 1 in length

// str="vivek\nmadiyan";//13
// console.log(str)
// console.log(str.length)

////STRING METHODS
// ->Str.toUpperCase()
// ->Str.toLowerCase()
// ->Str.trim()(remove whitespaces)
//str.slice(starta,end?)
//str1.concat(str2)
//str.replace(searchVal,newVal)
//str.charAt(idx)
// ----> Strings are immutable if any changes  happens it creates new string
// let str3="boolean";
// str3=str3.toUpperCase();
// console.log(str3);
// // console.log(newStr);
// let str4="antriksh"
// console.log(str4.slice(0,3));
// console.log(str3.concat(str4));
// console.log(str4.replace("tr","i"));
// console.log(str4.replaceAll("a","i"));
// console.log(str4.charAt(0));
//cant do str[0]="k" 

////PRACTICE
// let name=prompt("enter your name");
// let output=`@${name}${name.length}`;
// console.log(output);

////ARRAYS(objects instead of key here it is index)
// let arr=[1,2,3,4,5];
// console.log(arr)
// console.log(arr.length)
// console.log(typeof arr)
// console.log(arr[0])
// console.log(arr[100])//undefined
// //it is mutable
// arr[0]=7;
// console.log(arr)
// for(let i=0;i<arr.length;i++){
//    console.log(arr[i]);
// }

// for(let el of arr){
//     console.log(el)
// }

////PRACTICE
// let arr=[85,97,44,37,76,60];
// let sum=0;
// let avg;
// for(let marks of  arr){
   
//     sum+=marks;
   
    

// }
// console.log(sum/arr.length);

////PRACTICE
// let arr=[250,645,300,900,50];
// for(let i=0;i<arr.length;i++){
//   arr[i]=arr[i]-arr[i]*(.10)
// }
// console.log(arr)

// ////ARRAY METHODS
// //Push()
// //Pop()
// //toString()

// function sum(x,y){
//   return x+y;

// }
// let output=sum(10,20);
// console.log(output)

// const arrowSum=(x,y)=>{
//  console.log(x+y)
// };
// arrowSum(9,9);

// const mul=(x,y)=>{
//   console.log(x*y)
// }
// mul(8,8)

// function Count ( str){
// let count=0;
// for(let i=0;i<str.length;i++){
//   if(str.charAt(i)=="a"||str.charAt(i)=="e"||str.charAt(i)=="i"||str.charAt(i)=="o"||str.charAt(i)=="u"){
//    count+=1;
//   }
// }
// console.log(count)

// }
// Count("abcdef")

// const countVowels =(str)=>{
//   let count=0;
// for(let i=0;i<str.length;i++){
//   if(str.charAt(i)=="a"||str.charAt(i)=="e"||str.charAt(i)=="i"||str.charAt(i)=="o"||str.charAt(i)=="u"){
//    count+=1;
//   }
// }
// console.log(count)
// }
// countVowels("abcdef")

////forEach Loop in Arrays
//arr.forEach(callBackFunction )
//it is also called as higher order function(take other function as parameter or returning a function)
// let arr=[1,2,3,4,5];
// arr.map((val)=>{
// console.log(val*val)
// })

// arr.forEach(function printVal(val){
// console.log(val*val)
// })

// let newArr=arr.filter((val)=>{
//   return val%2==0
// })
// console.log(newArr)
// ////Map(creates a new array)

// ////reduce
// let arr1=arr.reduce((res,cur)=>{
//   return res+cur;
// })
// console.log(arr1)

// arr1=arr.reduce((prev,cur)=>{
//   return prev>cur ? prev :cur;
// })
// console.log(arr1)


////PRACTICE
// let arr=[87,93,64,99,86];
// let newArr=arr.filter((val)=>{
//  return val>90;

// })
// console.log(newArr)

// let input=prompt("enter the number");
// let arr=[];
// for(let i=1;i<=input;i++){
// arr.push(i)
// }
// console.log(arr)
// let arr=[1,2,3,4,5]
// let sum=arr.reduce((res,cur)=>{
// return res+cur;
// })
// console.log(sum)

// let arr=[1,2,3,4,5]
// let factorial=arr.reduce((res,cur)=>{
// return res*cur;
// })
// console.log(factorial)



