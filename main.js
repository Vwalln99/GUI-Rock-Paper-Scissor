let countPlayer = 0;
let countComputer = 0;

let clearbtn = document.getElementById('clear');
let ausgabeDiv = document.getElementById('ausgabe');
let punkteCDiv = document.getElementById('computer_score');
let punktePDiv = document.getElementById('player_score');
let spielzug = document.getElementById('computer_spielzug');

clearbtn.addEventListener("click", () => {
  punkteCDiv.textContent="0";
  punktePDiv.textContent="0";
  ausgabeDiv.textContent = "-";
}, false);

function computerPlay() {
  let auswahl = ["rock", "paper", "scissor"];
  let rand = Math.floor(Math.random() * 3);
  return auswahl[rand];
}

function init() {
  let rock = document.getElementById('rock');
  let scissors = document.getElementById('scissors');
  let paper = document.getElementById('paper');
  
  rock.addEventListener("click", () => {
    game("rock");
  });
  
  paper.addEventListener("click", () => {
    game("paper");
  });
  
  scissors.addEventListener("click", () => {
    game("scissor");
  });
}

function playRound(playerSelection) {
  const computerSelect = computerPlay();
  
  if (playerSelection === computerSelect) {
    return 0;
  } else if (playerSelection === "rock" && computerSelect === "paper") {
    spielzug.textContent = computerSelect;
    return 1;
  } else if (playerSelection === "paper" && computerSelect === "scissor") {
    spielzug.textContent = computerSelect;
    return 1;
  } else if (playerSelection === "scissor" && computerSelect === "rock") {
    spielzug.textContent = computerSelect;
    return 1;
  } else {
    spielzug.textContent = computerSelect;
    return 2;
  }
}

function game(playerSelection) {
  if (countPlayer >= 5 || countComputer >= 5) {
    countPlayer = 0;
    countComputer = 0;
    punktePDiv.textContent = countPlayer;
    punkteCDiv.textContent = countComputer;
  }
  
  function game(playerSelection) {
    if (countPlayer >= 5 || countComputer >= 5) {
      countPlayer = 0;
      countComputer = 0;
      punktePDiv.textContent = countPlayer;
      punkteCDiv.textContent = countComputer;
    }
    let whoWon = playRound(playerSelection);
    if (whoWon === 0) {
      ausgabeDiv.textContent = "A draw!";
    } else if (whoWon === 1) {
      countComputer++;
      ausgabeDiv.textContent = "You lose!";
    } else {
      countPlayer++;
      ausgabeDiv.textContent = "You win!";
    }
    punktePDiv.textContent = countPlayer;
    punkteCDiv.textContent = countComputer;
    if (countPlayer >= 5 || countComputer >= 5) {
      countPlayer = 0;
      countComputer = 0;
      punktePDiv.textContent = countPlayer;
      punkteCDiv.textContent = countComputer;
      ausgabeDiv.textContent = "-";
    }
  }
}
  


init();
