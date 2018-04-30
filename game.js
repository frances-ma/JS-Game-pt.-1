"use strict"; 

let choice = prompt("Do you want to play?").toLowerCase();
if (choice === "yes") {
 let userName = prompt("What is your name?");
 let userHealth = 40;
 let grantHealth = 10;
 
 let userWins = 0;
 let grantWins = 0;
 
 while (userHealth > 0 && grantHealth > 0) {
   userHealth -= Math.floor((Math.random() * 2) + 1);
   grantHealth -= Math.floor((Math.random() * 2) + 1);
 
   console.log( `${userName} health is ${userHealth}`)
   console.log( `Grant's health is ${grantHealth}`)

   console.log("");
 
   if (grantHealth <= 0) {
     userWins ++;
     grantHealth = 10;
     console.log(" Grant is defeated and user gets " + userWins + " wins ")
   } if (userWins === 3) {
     console.log("You win.");
     break;
   }      
} 
} else { 
    console.log("Goodbye"); 
}

