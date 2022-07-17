<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercise</title>
</head>
<body>
  <p>hello world</p>
  <button>To Do</button>
    <script>
       let todo1 ;
       todo1 =99;
       console.log(typeof todo1);

    //    exercise 2;
    let month ="April";
    let dayOfMonth= 9 + ',';
    let year =2022;
    console.log(month, dayOfMonth, year);
    //    exercise 3;
    let result = 5 + 4  * 3;
    let secondResult = (5 + 4 ) * 3;
    console.log(result, secondResult);

    //    exercise 4;
    let myAge =18 + '+';
    console.log('I am  ' + myAge + ' ' + 'years old')

    //  SECTION TWO   exercise ;
    //creating a variable;
    let btn = 'Click Me';
    // push btn the webpage ;
      //create a tag
    let newBtn = document.createElement('button');
      //push the text to the tag;
    newBtn.innerText = btn;
      // push the value/text to the webpage;
    document.body.appendChild(newBtn);

    //    exercise 2;
    /*
    let newHead='I love coding in C'
    let header = document.createElement('h1');
    header.innerText =newHead;
    document.body.appendChild(header)
    */
//    just send the message to the web page ;
document.body.innerHTML ="Dominic Bassee"
document.body.innerHTML =' ';

/*
//IMPORTANT INFOR;
et newVar = document.createElement('div');
newVar.innerText =todoOne;
document.body.appendChild(newVar);

// second Var;
newVar = document.createElement('div');
newVar.innerText =todoTwo;
document.body.appendChild(newVar);

// three Var;
newVar = document.createElement('div');
newVar.innerText =todoThree;
document.body.appendChild(newVar);

*/
   /* //  SECTION 3  exercise 1;
    function greeting (firstName){
        return('hello ' + firstName );
    }
    greeting('Dominic');
    console.log( greeting('Dominic'));


    //    exercise 2;
    function myName(name){
      return name.toUpperCase();
    }
    myName('dominic');
    console.log(myName('dominic'));

    function num(x){
      console.log(x * 2.24);
    }
    num(10)
*/
/*
Write a loop that makes seven calls to console.log to output the following
triangle:
*/
let emptyHash =' ';
for(i=1; i<=7; i++){
  emptyHash =emptyHash + '#';
  console.log(emptyHash);
}

let finalResult = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
finalResult =finalResult * 2;
}
console.log(finalResult);

/*
FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100,
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" for
numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
for numbers divisible by only one of those).
(This is actually an interview question that has been claimed to weed out
a significant percentage of programmer candidates. So if you solved it, your
labor market value just went up.)
*/
let num =100;
for(i =1; i <=num; i++){
  if(i % 3 ===0 && i % 5 ===0){
    console.log('FizzBuss');
  }else if(i % 3 ===0){
    console.log('fizz')
  }else if(i % 5 ===0){
    console.log('Buzz')
  }else{
  }
}
function pow(base, power){
  for(i =0; i <=power; i++){
  }
}
 function greet(who){
   console.log('hello! ' + who);
 }
 greet('Amadi');
 console.log('Bye');

 /*Exercise 1
Set up a <button id="todo-button">To Do</button> so that when you click the button, the text inside changes to "Done" (hint: use .innerText)*/

</script>
</body>