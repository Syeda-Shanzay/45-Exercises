/* 
Name Cases: Store a person’s name in a variable, 
and then print that person’s name in lowercase, uppercase, and titlecase.
*/

let personName: string = "syeda Shanzay"

// LowerCase:
console.log("LowerCase:", personName.toLowerCase())

// UpperCase:
console.log("UpperCase:", personName.toUpperCase())

// TitleCase:
console.log("TitleCase:", personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());