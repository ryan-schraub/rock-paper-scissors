const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput ==='rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  }
  else {
    console.log('There is an error')
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random()*3);
  switch (randomNumber){
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

const determineWinner = (userChoice,computerChoice) => {
  if(userChoice === 'bomb'){
    return 'You destroyed the computer';
  }
  if(userChoice === computerChoice){
    return 'The game is a tie';
  }
  
  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'Computer Won';
    }
  }
  
  if (userChoice ==='paper'){
    if (computerChoice === 'scissors'){
      return 'Computer Won'
    }
  }
  
  if (userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      return 'Computer Won';
    }
  }
    else {
      return 'User Won!';
    }
  }

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log(`Your choice was: ${userChoice}`)
  console.log(`The computers choice was: ${computerChoice}`)
  console.log(determineWinner(userChoice,computerChoice));
}

playGame();
