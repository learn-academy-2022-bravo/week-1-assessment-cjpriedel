// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: it will add the value "indigo" to the array temporarily and return the arrays length.

// b) Verify and explain: the command on line 10 returns (5), the index of the new value added to the array


// --------------------1) What will this log?

const cohort = "LEARN 2022"
// console.log(cohort.length)

// a) Your answer: it will return the number of values in the string 
// b) Verify and explain: it returned the number 10, I was expecting a value of 9 counting from 0


// --------------------2) What will this log?

const greeting = "Hello World!"
//console.log(greeting[4])

// a) Your answer: undefined
// b) Verify and explain: The brackets led me to think it was an array, the output was the letter 'o'. The argument of [4] returns the value at that index place. 


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: "Ruby"
// b) Verify and explain: zero index made Ruby the number 1 place in the array


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// a) Your answer: Error 
// b) Verify and explain: .toUpperCase can only work on strings, an array index needs to be added into the variable invoking the function --> weekendDays[1].toUpperCase()

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
//console.log(typeof dataTypes.length)

// a) Your answer: it will return "number"?
// b) Verify and explain: the console log is asking for the typeof data produced by the .length method on the variable. The .length returns a numerical value meaning the typeof data would be number
