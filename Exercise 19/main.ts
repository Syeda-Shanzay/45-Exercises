/*
Dinner Guests: Working with one of the programs from Exercises 14 through 18,
print a message indicating the number of people you are inviting to dinner.*/

let guestList : string[] = ["Rehma","Osama","Abza"];

//guestList.forEach(guest => {console.log(`Dear ${guest}, you are invited to dinner.`)});

let lengthGuests: number = guestList.length
console.log(`We are inviting total ${lengthGuests} guests.`);