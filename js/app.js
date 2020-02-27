'use strict';

var correctAnswers = 0;

//One: Greet the user

var user = prompt('What is your name?');
console.log('User name is ', user);
confirm(user + ', are you ready to start the quiz? You will do great!');

//Two
var lochNess = prompt('Do I currently have 4 lochness monsters in a fish tank?').toLowerCase();
console.log(lochNess);

//need to validate input
if(lochNess === 'yes' || lochNess === 'y'){
  alert('That is correct, I do have four monsters in a fish tank.');
  correctAnswers = correctAnswers + 1;
  console.log(correctAnswers);
} else {
  alert('Actually I do have 4 lochness monsters. Good try.');
}

//Three
var livin = prompt('Did I grow up in Maryland?').toLowerCase();

if (livin === 'y' || livin == 'yes') {
  alert('That is correct, I grew up in Maryland!');
  correctAnswers = correctAnswers + 1;
  console.log(correctAnswers);
} else {
  alert('In fact, I did grow up in Maryland.');
}

//Four
var age = 26;

for(var i = 0; i < 3; i++){
  var ageAnswer = prompt('How old am I?');
  if (ageAnswer == age){
    alert('You got the question right. Great job!');
    console.log(user + ' response is ' + ageAnswer + '!');
    correctAnswers = correctAnswers + 1;
    console.log(correctAnswers);
    break;
  } else if (ageAnswer > age){
    alert('You guessed a bit too high, do I look that old?!');
  } else if (ageAnswer < age){
    alert('You are too low, but thanks, I look young!');
  } else if(isNaN(ageAnswer) === true){
    alert('That is not a number, please try again.');
  } else if ((i === 3) && (ageAnswer !== age)){
    alert('You have run out of attempts. My age is ' + age + '.');
  }
}

//Five

var userCorrect = false;
var pokemon = ['pikachu', 'squirtle', 'charmander', 'bulbasaur'];

var guesses = 0;

while(guesses < 7){
  var pokeAnswer = prompt('What pokemon did I catch today, using pokemonGo?');

  for(var x = 0; x < pokemon.length; x++){
    if(pokeAnswer === pokemon[x]){
      alert('You caught the right answer. Nice work!');
      guesses = 7;
      correctAnswers++;
      userCorrect = true;
      break;
    }
  }
  if(guesses !== 7){
    prompt('Not that one. Try again?');
    userCorrect = false;
    guesses++;
  }
  if((userCorrect === false) && (guesses > 6)){
    alert('Uh oh, you did not get any right. I caught ' + pokemon);
    break;
  }

  alert (user + 'you scored a total of ' + correctAnswers);
}


