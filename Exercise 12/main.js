"use strict";
/* Greetings: Start with the array you used in Exercise 11,
but instead of just printing each person’s name,
print a message to them. The text of each message should be the same,
but each message should be personalized with the person’s name.
*/
let names = ["Rehma", "Abza", "Osama", "Tahiya"];
names.forEach(friend => {
    console.log(`Hello, ${friend}! how are you today?`);
});