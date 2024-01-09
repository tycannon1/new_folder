alert('Hello!');
alert('Welcome to your mars adventure');
alert('Booting up...');
alert('All systems go!');
alert("Let's start!");

const username = prompt("Hi there. What's your name?");

alert (`hi ${username} welcome to your mars adventure`);
alert (`Get ready to board the mothership`);

let ready = prompt(`Are you excited? Y or N`)
ready = ready.toUpperCase();
if (ready == 'Y') {
    alert("I knew you'd say that. It's so cool that you're going to Mars!")
} else if (ready == 'N') {
    alert('well it is too late to back out now')
}
//else {
 //   alert("you need to put a Y or N dummy, let's go no time to waste")
//};

alert("It's time to pack for your trip to Mars.");
let numSuitcases = prompt('How many suitcases do you plan to bring?');
numSuitcases = Number(numSuitcases);

if (numSuitcases > 2) {
    alert('That is way to many suit cases sally')
    alert('Please try to fit your stuff into 2 suitcases.');
} else { 
    alert("sweet we can fit your fat a$$ in the spaceship")
}

alert("You're allowed to bring one companion animal with you.");
let companionType = prompt('What kind of companion animal would you like to bring?');
let companionName = prompt("What is your companion's name?");

let firstLetter = companionName[0];
firstLetter = firstLetter.toUpperCase();

let otherLetters = companionName.slice(1);
otherLetters = otherLetters.toLowerCase();

companionName = firstLetter + otherLetters;

alert(`So you are bringing ${companionName} the ${companionType}`);

alert('NASA has a interior design team offering to outfit your space ship.');
alert(`You have a couple of options for the interior decor of your ship. Your options are:
A  Sleek, modern minimalism
B  Retro/vintage space age
C  Victorian-era steampunk
`);

let decorChoice = prompt('Which option do you select?');
decorChoice = decorChoice.toUpperCase();

let decor;
if (decorChoice === 'A') {
  decor = 'modern minimalist'
} else if (decorChoice === 'B') {
    decor = 'vintage space age'
} else if(decorChoice === 'C') {
    decor = 'Victorian-era steampunk'
}

alert (`${username} and ${companionName}, surfing the celesctial abyss in a ${decor} spaceship`);
    

let timer = 5;
while (timer > 0) {
alert(`${timer}...`);
timer -= 1;
}
alert('*** LIFTOFF ***');