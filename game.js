"use strict"; 
//prompt to ask to play if yes, then the if/else statments & while loops are initiated. If no, the loop ends with the else statement at the bottom w/ message "Goodbye."

let choice = prompt("Do you want to play?").toLowerCase();
// .toLowerCase() used to convert all characters entered into prompt to lowercase 
// variables declared in if/else statement 
if (choice === "yes") {
 let userName = prompt("What is your name?");
 let userHealth = 40;
 let grantHealth = 10;
 
 let userWins = 0;
 let grantWins = 0;
 
 while (userHealth > 0 && grantHealth > 0) {
   userHealth -= Math.floor((Math.random() * 2) + 1);
   grantHealth -= Math.floor((Math.random() * 2) + 1);
 
   console.log( `${userName} health is ${userHealth}`); 
   console.log( `Grant's health is ${grantHealth}`); 

   console.log("");
 
   if (grantHealth <= 0) {
     userWins ++;           // ++ increment, like i++ ; 
     grantHealth = 10;
     console.log(`Grant is defeated and ${userName} gets ${userWins} wins !`); 
   } if (userWins === 3) {
     console.log("You win!");
     break;
   }      
} 
} else { 
    console.log("Goodbye."); 
}



