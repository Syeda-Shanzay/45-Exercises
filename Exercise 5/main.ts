/*
Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. 
Then compose your message and store it in a new variable called message. Print your message.
*/

let famous_person : string = "Muhammad Ali Jinnah"
let quote : string = "Think a hundred times before you take a decision, but once that decision is taken, stand by it as one man."
let message : string = `${famous_person} once said, "${quote}"`
console.log(message)