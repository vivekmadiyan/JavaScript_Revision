// //ProtoTypes in js
// // js obj is entity have state and behaviour.
// //js obj have special prop called prototype.(obj k anadr obj)

// const student={
//     name:"vivek",
//     marks:85,
//     printMarks:function(){
//     console.log("marks :", this.marks) //student.marks
//     },
// };

// const employee={
//     calcTax(){
//        console.log("tax is 10%"); 
//     },
//     // calcTax2 : function(){
//     //     console.log("tax is 20%"); 
//     // }
// }

// const karanArjun ={
//     salary:20000,
//     calcTax(){
//         console.log("20% tax");
//     }
// }

// karanArjun.__proto__=employee;
//CLASSES IN JS (IS A PROGRAM CODE FOR CREATING OBJECTS)
// class Car{
//       constructor(brand){
//         console.log("creating new objects");
//         this.brand=brand;
//       }
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
//     setBrand(brand){
//         this.brand=brand;
//     }
// }

// let fortuner =new  Car("fortuner");
// // fortuner.setBrand("fortuner");
// let lexus=new Car("lexus");
// // lexus.setBrand("fortuner");

////Inheritance (passing down properties )
////EXAMPLE-1
// class Parent{
//     hello(){
//         console.log("Hello");
//     }
// }
// class Child extends Parent{ 
// }
// let obj = new Child;
// console.log(obj.hello())

//EXAMPLE-2
// class Person{
//     constructor(){
//         console.log("enter parent constructor");
//         this.shop="market";
//     }
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep")
//     }
// }
// class Eng extends Person{
// constructor(branch){
//     console.log("enter child constructor");
//     super();//to invoke parent class constructor
//     this.branch=branch;
//     console.log("exit child constructor");
// }
//   work(){
//     console.log("lets do something")
//   }
    
// }
// let obj= new Eng("chemical eng");
// obj.sleep();
// obj.eat();
// obj.work();
// NOTE: IF BOTH THE CHILD AND PARENT HAVE SAME FUNC THEN CHILD FUNC WORKS
// (OBJ OF CHILD CLASS)--- ALSO KONWN AS METHOD OVERRIDING

////SUPER KEYWORD
//THE SUPER KEYWORD IS USEED TO CALL--->
//THE CONSTRUCTOR OF ITS PARENT CLASS TO ACESS THE PARENT'S PROPERITIES AND METHODS.
//SUPER(ARGS)//calls parent's constructor
//super.parentMethod(args)

//Example
// let data="vivek's data";
// class User{
   
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
        
//     }
//     viewData(){
//         console.log(data);
//     }
// }


//EXample
// class Admin extends User{
// constructor(name,email){
//     super(name,email);
// }

// editData(){
//     data="new data";
// }
// }
// let obj1=new User("vivek","vivekmadiyan3536@gmail.com");
// let obj2=new User("aryan","aryan3536@gmail.com");
// let admin1=new Admin("vivek","vivekmadiyan3536@gmail.com");


//try catch error

// let a=5;
// let b=20;
// console.log("a=", a);
// console.log("a=", b);
// try{

//     console.log(a+c)
//     }
// catch(err){
//     console.log(err)
// }

