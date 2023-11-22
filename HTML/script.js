// let vs var vs const


// var a =10;

// a="Sample";

// a=[2,7,6,4]

// console.log("Value Of a", a);

// var b = 10;

{

    var c = 20;

    console.log("Inside Block", c)

}


// console.log("Outside Block", c)


var a = 10;

var a = 20;

let name = "Tom";

let age =26;

let firstName = "";

let lastName = "";

console.log("Value of a =",a)


// var num = 10;

// if(true)
// {
//     var num = 9;

//     console.log("Inside if block", num);
// }

// console.log("Outside if block", num);


// let num=null;

// console.log("Num", num)


// let arr = [1,2,3,4,5,"sample1",3,"sampl2","sample3",true,null,undefined,[2,4,3,6]]

// console.log("Array", arr.length);

// function addTwoNum(num1,num2)
// {
//    console.log("Addition of 2 nos = ", num1+num2)
// }

// addTwoNum(12,13)




// Objects

let student = {rollNo: 1234, batch: "1st Year", stream: "Electrical", cgpa:8.7};

student.name = "ram"

console.log("Object Details", student)



let student1 = {name:"ram", details:{rollNo:1234, batch:"2nd Year"}}

console.log("Student1 ", student1);


if(1 === "1")
{
    console.log("Hi!")
}

// == Loose Equality
// === Strong Equality

// let result = a>b? true : false // Ternary Operator

//  condition ? trueValue : falseValue

// if(a>b)
// {
//     result = true;
// }
// else{
//     result = false;
// }

// if(2)
// {

// }

// Object

let students = { name: "Ram", age:23, batch: "2nd Year", stream: "CSE" }; 

for ( let key in students)
{
    console.log(key, students[key]);
}

if('firstName' in students)
{
    console.log("True")
}
else
{
    console.log("False")
}

// Arrow Function

function addTwoNum(a,b)
{
    return a+b;
}

const addTwoNum = (a,b)=>
{
    return a+b;
}

