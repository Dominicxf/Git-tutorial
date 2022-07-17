Loop through array elements
Complete the function loopThroughElements such that it iterates over every item in the elements array it receives and logs it to the console (using console.log).
Code Snipet

**
 * @param {array} elements
 */
function loopThroughElements(elements) {
    elements.forEach(function(elements){
        console.log(elements);
    })

}
loopThroughElements(["Sam", "Charlie", "Alex"]); // should log every name to the console

another Example 2
Log user ids
Complete the function logUserIds such that it iterates over every item in the userIds array it receives and logs it to the console (using console.log).

/**
 * @param {number[]} userIds
 */
function logUserIds(userIds) {
    userIds.forEach(function (userIds){
        console.log(userIds);
    })

}

// Sample usage - do not modify
logUserIds([10, 15, 14]); // should log every userId to the console


SUM GRADES
Complete the function sumGrades such that it returns the sum of all the grades it receives as a parameter. We haven't seen reduce yet, so try to solve it using what you have learned so far.

function sumGrades(grades) {
    let sum =0;
    grades.forEach(function(grade){
        sum += grade;
    })
    return sum;
}

// Sample usage - do not modify
console.log(sumGrades([15, 5, 10])); // 30
console.log(sumGrades([12, 10, 13, 19])); // 54


Sum positive numbers
Complete the function sumPositiveNumbers such that it returns the sum of all positive numbers from the numbers parameter it receives.

This challenge will help you combine some of the knowledge you acquired in this course. Take your time and make as many mistakes as possible!
SOLUTION;

function sumPositiveNumbers(numbers) {
    let sum =0;
    numbers.forEach(function(number){
        if(number > 0)
        sum = sum + number;

    })
    //always return the the iteration ;
    return sum;
   

}

// Sample usage - do not modify
console.log(sumPositiveNumbers([15, -5, 10])); // 25
console.log(sumPositiveNumbers([-3, 4, -2, 1])); // 5


Sum odd numbers
Complete the function sumOddNumbers such that it returns the sum of all the odd numbers from the numbers parameter it receives.
The function should also work for negative numbers.

SOLUTION
function sumOddNumbers(numbers) {
    let sumOdd =0;
    numbers.forEach(function(number){
        if(number % 2 !==0 ){
            sumOdd +=number;
        }
    })
    return sumOdd;

}

// Sample usage - do not modify
console.log(sumOddNumbers([15, 5, 10])); // 20
console.log(sumOddNumbers([2, 3, 4, 5, 6])); // 8
console.log(sumOddNumbers([-2, -3, 4, 5, 6])); // 2

Complete the function renderTableRows such that it returns the following HTML:

<tr>
    <td>label here</td>
    <td>value here</td>
</tr>
for every row that it receives in its rows parameter.

The rows parameters looks like the following:

[["Carbs", "17g"], ["Protein", "19g"], ["Fat", "5g"]]
This is a nested array. Every inner array contains 2 items, the first one referring to the label that you should replace instead of label here and the second one referring to the value which you should replace instead of value here.
Make sure to use console.log() every step of the way to visualize what you're working with.

Don't forget to look at the end result in the browser tab!

export function renderTableRows(rows) {
    let html ="";
rows.forEach(function(row){
    html +=`<tr>
    <td>${row[0].charAt(0).toUpperCase() + row[0].substring(1).toLowerCase()}</td>
    <td>${row[1]}</td>
     </tr>`
})
    console.log(rows);
    return html;

}


Chapter Recap
const data = [1, 2, 3] is an array containing 3 numbers.
array.length returns the number of elements inside the array.
array.push(x) allows you to add the variable x to the end of the array.
array.push(x) returns the new length of the array (after the push has been made).
Arrays defined with const are not constants because you can change the elements inside of it. However, you cannot re-assign them to another value thus they will always be an array.
.forEach(callback) iterates over every item in an array.
A callback is a function definition passed as an argument to another function.
Always start with a console.log() inside the .forEach() to visualize the shift from array to array item (you can skip that when you become used to it).
The .forEach() method will take your function definition and call it for every item of the array. Every time it calls it, it will replace the first parameter with the corresponding array item.
Name your arrays in plural and the array item (inside the .forEach()) in singular.
Make sure to correctly place the re

Positive temperatures
Complete the function getPositiveTemperatures such that it returns an array containing the positive temperatures (the temperatures that are above 0).

function getPositiveTemperatures(temperatures) {
    const newNum =temperatures.filter(number => number >=1);
    return newNum;


}

// Sample usage - do not modify
console.log(getPositiveTemperatures([-5, 12, 3])); // [12, 3]
console.log(getPositiveTemperatures([1, -3, -2, 4, 10])); // [1, 4, 10]

/*********************************************************************************************************************************/
Freezing temperatures
Complete the function getFreezingTemperatures such that it returns an array containing the freezing temperatures (the temperatures that are below 0).
ANSWER
function getFreezingTemperatures(temperatures) {
    const freezeTemp = temperatures.filter(temperature => temperature <=0);
    return freezeTemp;

}
or using function expression/
function getFreezingTemperatures(temperatures) {
    return temperatures.filter(function(temperature){
         return temperature <=0;
      
    })
     

// Sample usage - do not modify
console.log(getFreezingTemperatures([-5, 12, 3])); // [-5]
console.log(getFreezingTemperatures([1, -3, -2, 4, 10])); // [-3, -2]

/*********************************************************************************************************************************/

/*********************************************************************************************************************************/
 Get year
Complete the function getYear such that it returns the searchYear (passed as 2nd parameter) when it's found in the array. Otherwise, it should return undefined.

Take a look at the sample usage and expected output to better understand how the function should work.

function getYear(years, searchYear) {
    return years.find(function(year){
        return year === searchYear;
    })

}

// Sample usage - do not modify
console.log(getYear([2019, 2020, 2021], 2020)); // 2020
console.log(getYear([2019, 2020, 2021], 1990)); // undefined

/*********************************************************************************************************************************/
Recap
The array .map(callback) method allows you to transform an array into another one.
The array .includes(item) method takes an item and returns true when that item exists in the array and false otherwise.
The array .join(glue) method returns a string of the array elements separated by the glue.
JOIN ARRAY;
const groceries = ["Apple", "Peach", "Tomato"];
groceries.join("; "); // "Apple; Peach; Tomato"
groceries.join(" . "); // "Apple . Peach . Tomato"
/*********************************************************************************************************************************/
INCLUDE ARRAY;
Is app used?
Complete the function isAppUsed such that it returns true when the app parameter it receives exists in the apps parameter, and false otherwise.

function isAppUsed(apps, app) {
    return apps.includes(app )

}

// Sample usage - do not modify
console.log(isAppUsed(["Twitter", "Calculator"], "Calculator")); // true
console.log(isAppUsed(["Clock", "Calculator"], "Safari")); // false

/*********************************************************************************************************************************/

/*********************************************************************************************************************************/
MAP() METHOD;
String sizes
Complete the function getStringSizes such that it returns an array of the number of characters for every string it receives in the strings parameter.

This means, for the array ["abc", "d"] it should return [3, 1] that's because the first string is made up of 3 characters and the second string is made up of 1 character.
sOLUTION
function getStringSizes(strings){
    return strings.map(string => string.length)
}

// Sample usage - do not modify
console.log(getStringSizes(["a", "abc"])); // [1, 3]
console.log(getStringSizes(["Sam", "Alex", "Charlie"])); // [3, 4, 7]
console.log(getStringSizes(["Hello", "Blue"])); // [5, 4]
/*********************************************************************************************************************************/
Classroom Project I
This is a classroom project! You can enter grades in the browser tab and add them to the app, which will show you various statistics about the classroom. For example, you will see the average grade, all the failing grades, etc.

Each function has a comment describing what it should return, but you can also find them below:

getNumberOfGrades should return the number of grades.
getSumGrades should return the sum of all the grades.
getAverageValue should return the average value of all grades (sum of all grades divided by the total number of grades).
getPassingGrades should return all passing grades (10 and above).
getFailingGrades should return all failing grades (9 and below).
getRaisedGrades should return all the grades raised by 1 (grades should not exceed 20).

SOLUTION
export function getNumberOfGrades(grades) {
    // TODO: return the number of grades
    return grades.length;

}

/** @param {number[]} grades */
export function getSumGrades(grades) {
    // TODO: return the sum of all the grades
    let sum =0;
    grades.forEach(function(grade){
        sum +=grade;

    })
            return sum;

}

/** @param {number[]} grades */
export function getAverageValue(grades) {
    // TODO: return the average value of all grades (sum of all grades divided by the total number of grades)
    //using Arrow function;
    let sum =0; 
    grades.forEach(grade => sum += grade);
    return sum / grades.length;

}

/** @param {number[]} grades */
export function getPassingGrades(grades) {
    // TODO: return all passing grades (10 and above)
    return grades.filter(grade => grade >=10);
}

/** @param {number[]} grades */
export function getFailingGrades(grades) {
    // TODO: return all failing grades (9 and below)
    return grades.filter(grade => grade <=9);


}

/** @param {number[]} grades */
export function getRaisedGrades(grades) {
    // TODO: return all the grades raised by 1 (no grade should exceed 20)
    return grades.map(function(grade){
        if(grade +1 >20){
            return 20;
        }
        return grade +1;
    })
    return grade


}

/*********************************************************************************************************************************/\

/*********************************************************************************************************************************/
Voters stats API
This project uses the fetch API (that you're going to learn about later in this course) to get the stats of citizens in a city. To complete this project, you need to return the number of voters in the city selected by the user.

Go to the browser tab and select Amsterdam or Berlin. This will get the age of citizens in the selected city (not real data) using an API. This data is received by a function called getVotersCount.

Implement the getVotersCount function such that it returns the number of citizens that are allowed to vote (must be 18 years or older).
*/
// export function getVotersCount(ages) {
//     return ages.filter(function(age){
//         return age >=18;
//     }).length
   
// }

export function getVotersCount(ages) {
    const getVoterNum = ages.filter(function(age){
        return age >=18;
    })
    return getVoterNum.length;
   
}
/*********************************************************************************************************************************/


