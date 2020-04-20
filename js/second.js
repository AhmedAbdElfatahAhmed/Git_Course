//--------------------------------------------------------------------------------------------------------------

//                                Start second session

//--------------------------------------------------------------------------------------------------------------

/*

## Function ( aim of function: Reused Block of function by calling function )

Ex1:- using return Keyword

function getAvg(num1,num2,num3) 
{

var sum=num1+num2+num3;
return sum/3 ;

}

var x=getAvg(20,30,40); // 30
console.log(x); 



Ex2:- Without using return Keyword


function getAvg(num1,num2,num3) 
{

var sum=num1+num2+num3;

console.log(sum/3);

}

getAvg(10,50,30); // 30

getAvg(10,20,70); // 33.3333333333336

getAvg(100,20,30); // 50


Ex3:-

function calProduct (price , profit , tax , adds)
{

 var result1= price + profit;
 var result2= result1 + (price*tax);
 var result3=result2+adds;
 // لو عاوز اعرض سعر المنتج بس وليس اضعه فى عمليات اخرى 
 // so , do not used return keyword

 console.log(result3);

}

calProduct(100,40,0.1,5); // 155

calProduct(200,400,0.4,50);  // 730







## Types of Function 


1- statement Function

ex:-

function welcome(userName)
{
    window.alert("Welcome "+userName);
}
welcome("Ahmed");



2- expression function or declaration function

ex1:-

var welcome=function(userName)
{
    window.alert("Welcome "+userName);

}
welcome("Ali");


ex2:- Self-Invoking Functions  هى دالة بتنادى نفسها لوحدها 
// this is not need to call it , so it have not a name(anonymous function) .
// aim of this function is:- make varible inside this function in a local scope not global scope
// so , can repeat name of variable without occuring override. 
// تكتب كالتالى 

(function()
{

 console.log("Hello");

}) ();










## Hoisting (رفع) (Applay in variable and function)

1- Hoisting in variable

console.log(y);  // error because y is not defined  

//----------------

// لكن لو عملتها كالتالى

console.log(y);  // undefined because javascript hoisting (var y) in the start of my code

var y=10;

//----------------

// لكن لو عملتها كالتالى

y=10;
console.log(y);  // 10 because javascript hoisting (var y) in the start of my code ,and y=10 in the start
var y=10;





2- Hoisting in function

example above in two type of function , due to Hoisting , javescript make code 
 كالتالى :- 


var welcome;

welcome = function(userName)
{
    window.alert("Welcome "+userName);

}
welcome("Ali");



## Diffrent between two type of function in Hoisting


A- Hoisting in statement function

//  in this , javascript hoisted declaration of function and function body in the start of my code
ترفع الجزء التالى كله :-


var welcome;

welcome = function(userName)
{
    window.alert("Welcome "+userName);

}


B- Hoisting in expression function

//  in this , javascript hoisted declaration of function only in the start of my code

  ترفع الجزء التالى فقط :-

var welcome;









## Functional programming language (in javascript which token from scheme)

when we say this langauage has Functional programming concept ??? 
when function can be:-

1- assigned to variable (such as made in expression function) .
ex:- var x = function(){ }

2- passed as a parameter for another function .
ex:- sum(10,avg(20,30))

3- returned from another function .
ex:- return avg(result,20) , note1:result came from another function ,note2:avg() as a function

4- property from object .







## JavaScript variables have only two scopes:-

1- global scope:-can be defined anywhere in your JavaScript code.
2- local scope:- will be visible only within a function where it is defined.


*/

//-------------------------------------------------------------------------------------------------------------


/*

## object oriented programming (OOP)


1- prototype-based (object-based)

ex:-

var product=
{
    onSale:false,
    price:4500,
    name:'toshiba c33',
    category:'computers',
    components:{hardDisk:4000 , Ram:"8G" ,onPower:function(){ window.alert("power is responsible for electricity of computer ");}},
    welcome:function()
    {
        window.alert("Hello "+this.name);// keyword(this) , refer to object(product)
        
    }


}

console.log(product.welcome());
console.log(product.components.onPower());



2- class-base -----> Explain it in ES6


*/


//---------------------------------------------------------------------------------------------------------------

/*

## Array

ex1:-

// index       0      1      2   3      4       5
var friends=['Ali','Ahmed',false,70,'Mohamed','Amr'];

for(var i=0;i<friends.length;i++)
{
    console.log(friends[i]);
}

ex2:- list of objects inside array

var products=[ {name:"toshiba" ,price:3000,category:'computers',} ,{name:"Lenovo" ,price:4000,category:'computers',}];
for(var i=0;i<products.length;i++)
{
    console.log(products[i].name);
}

##  built in methods inside array ( push() , unshift() , pop() , shift() , sort() , reverse() )

ex1:- such as ( push() , unshift() )  أضافة عناصر


var friends=['Ali','Ahmed','Helal','Abdo','Mohamed','Amr'];

var newFriend=prompt("Enter your New friend name");

//friends.push(newFriend); // تضيف عنصر فى الاخر
//friends.unshift(newFriend); //  تضيف عنصر فى الأول            

for(var i=0;i<friends.length;i++)
{
    console.log(friends[i]);
}



ex2:- such as ( pop() , shift() )  حذف عناصر


var friends=['Ali','Ahmed','Helal','Abdo','Mohamed','Amr'];


//friends.pop(); //  تحذف أخر عنصر 
//friends.shift(); //  تحذف أول عنصر          

for(var i=0;i<friends.length;i++)
{
    console.log(friends[i]);
}


ex3:- such as ( sort() , reverse() )  ترتيب عناصر

var friends=['Ali','Ahmed','Helal','Abdo','Mohamed','Amr'];


//friends.sort();   //  Rearrange Elements from A to Z
//friends.reverse();   //  Reverse Elements in array  

for(var i=0;i<friends.length;i++)
{
    console.log(friends[i]);
}

ex4:- such as ( splice() )                         // search slice() , indexOf()

var friends=['Ali','Ahmed','Helal','Abdo','Mohamed','Amr'];


friends.splice(1,3);   //تحذف جزء كامل يبدأ من 1 ويحذف عدد 3
 
for(var i=0;i<friends.length;i++)
{
    console.log(friends[i]);
}

*/

//---------------------------------------------------------------------------------------------------------------------




// ## Excercies (To Apply) ----> Represent as CRUD   //  I am using Bootstrap in this Excercies
/*
C ----> Create
R ----> Retrieve 
U ----> Update
D ----> Delete
*/  

var productNameInp=document.getElementById("productNameInput");   // input tag in html

var productPriceInp=document.getElementById("productPriceInput"); // input tag in html

var productCategoryInp=document.getElementById("productCategoryInput"); // input tag in html

var productDescriptionInp=document.getElementById("productDescriptionInput"); // input tag in html



var productsContainer= [] ; // I made array to put in it many of products by push() method in array





function addProduct()        // call function in button tag
{
 
  // inside function , I made object to allow user insert values

var product=   // object
{

  name:productNameInp.value ,           // value is a property in input tag
  price:productPriceInp.value ,
  category:productCategoryInp.value ,
  description:productDescriptionInp.value

}

productsContainer.push(product); // push created objects(product) in array(productsContainer) .

displayProducts();



}



function displayProducts()
{

 var cartoona ="";

 for(var i=0;i<productsContainer.length;i++)
 {

    cartoona+=`<tr>
    <td>`+productsContainer[i].name+`</td>
    <td>`+productsContainer[i].price+`</td>
    <td>`+productsContainer[i].category+`</td>
    <td>`+productsContainer[i].description+`</td>
    </tr>`;
 }

 document.getElementById("tableBody").innerHTML= cartoona;

}

//-------------------------------------------------------------------------------------------------------------

//                                   End second session

//--------------------------------------------------------------------------------------------------------------















//-------------------------------------------------------------------------------------------------
//                             Ahmed helal expalining
//-------------------------------------------------------------------------------------------------


/*

//  let hemda="ahmedHelal"

function hideMyVariable()
{
    hemda="ahmedHelal"
}

// hideMyVariable()

*/

