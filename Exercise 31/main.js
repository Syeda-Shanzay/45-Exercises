"use strict";
let userNames = ["Ali", "Ayesha", "Admin", "Syeda", "Asim"];
userNames = [];
if (userNames.length === 0) {
    console.log("We need to find some users!");
}
else {
    userNames.forEach(oneUser => {
        if (oneUser === "Admin") {
            console.log(`Hello ${oneUser}, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${oneUser}, thank you for logging in again.`);
        }
        ;
    });
}