// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"


//pseudo-code
        //create function 
        //create variable for boiling point
        //conditional statement to check variable values
        // if temp(x) is a larger number than boilingPoint 
            // show  "temp(x) is above boiling point"
            // if the evaluation is false, return temp is below boiling point
            // if it is not above or below it is assumed the input = boilingPoint value
        
const temp1 = 42
const temp2 = 350
const temp3 = 212
const boilingPoint = 212
    
    const isItBoiling = (tempInput) => {
        if(tempInput > boilingPoint ) {
            console.log(`${tempInput} is above boiling point!`)
        }
         else if(tempInput < boilingPoint) {
        console.log(`${tempInput} is below boiling point!`)
     } else {
        console.log(`${tempInput} is exactly at boiling point!`)
        }
    }

    console.log(isItBoiling(211))
    console.log(isItBoiling(212))
    console.log(isItBoiling(213))

// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

        

//pseudo code
        //combine the two arrays using .concat into a newly assigned variable now containing the combined array
        // use the new variable containing the combined arrays to evaluate and log for the variables number of values. 

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

let combinedNumbers = myNumbers1.concat(myNumbers2)

console.log(combinedNumbers.length)


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "1202 ovarB"


//pseudocode
    //create a function that splits the string variable "currentCohort" into an array 
    // reverse the array "currentCohort"
    // join the array into a new, reversed string. 
    // return the new value, (expected 2202 ovarB)

const currentCohort = "Bravo 2022"

    const newString = () => {    
        return currentCohort.split("").reverse().join("")
            console.log(newString())
    }

console.log(newString(currentCohort))

// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"      


//pseudocode
            //create a function to evaluate the array of numbers
            // within the function nest a for loop that checks every value at each index of the array
            // incrementally evaluate each value to determine if it is divisible by 2 using modulo    
                //if the value of the index being evaluated is even return the string "even"
                //if the value of the index being evaluated is odd return the string "odd"
            //console log the invoked function and evaluate output


const myArray = [13, 34, 5, 10, 27, 42]

const oddOrEven = () => {
    for(let i = 0; i < myArray.length; i++){
        if(myArray[i] % 2 == 0){
        console.log("even")
    } else {
        console.log("odd")
    }
  }
}
console.log(oddOrEven())


// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3



//pseudocode 
    //create a function that accepts two numbers first number being A and second being B
        //nest an if statement to evaluate if number A is > number B
        //nest an if statement to evaluate if number A is < number B
            //if A is larger than B, return the value of number A minus number B
            //if A is smaller than B, return the value of number B minus number A
            //if A is the same as B, return a value stating so
        //log the final output of the function using console.log 

        
// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24


const subtractionFunction = (a, b) => {
    if(a > b){
        return (a - b)    
    } else if (a < b) {
        return (b - a)
    } else {
        return ("The numbers were the same, 0 remains")
    }
}
console.log(subtractionFunction(number1, number2))
console.log(subtractionFunction(number3, number4))
