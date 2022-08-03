let username = prompt("Welcome to GC mini golf! What is your name?");
console.log(username);

let play = prompt("Hi," + username + "! would you like to play 3 or 6 holes?");
console.log(play);

let par = play * 3; 
let holeputts = 0;

for (let i = 0; i < play; i++) {
    let hole = Number (prompt(`How many putts for Hole ${i + 1}? (Par is 3)`))
    holeputts += hole
}

let finalscore = par - holeputts; 

if (finalscore === 0) {
    console.log(`Good game, ${username}. Your total par was: 0`)
} 
else if (finalscore < 0) {
    console.log(`Nice try ${username}... Your total par was: +${finalscore * -1}`)
}
else if (finalscore > 0) {
    console.log(`Great job, ${username}! Your total par was: -${finalscore}`)
}