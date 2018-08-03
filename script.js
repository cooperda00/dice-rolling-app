//Button Variables
const btnOne = document.querySelectorAll("button")[0];
const btnTwo = document.querySelectorAll("button")[1];
const btnThree = document.querySelectorAll("button")[2];
const btnFour = document.querySelectorAll("button")[3];
const btnFive = document.querySelectorAll("button")[4];
const btnSix = document.querySelectorAll("button")[5];

//Output Variable
const output = document.querySelectorAll("div p")[0];

//Random Number Function
function randomNumber(){
  return Math.floor(Math.random() * 6) + 1;
};

//Roll One Button Click Event
btnOne.addEventListener("click", () => {
    let roll = randomNumber();
    output.textContent = `You rolled a ${roll}`;
});

//Roll Two Button Click Event
btnTwo.addEventListener("click", () => {
  let roll1 = randomNumber();
  let roll2 = randomNumber();
  output.textContent = `You rolled a ${roll1} and a ${roll2}. Total: ${roll1 + roll2}`;
});

//Roll Three Button Click Event
btnThree.addEventListener("click", () => {
  let roll1 = randomNumber();
  let roll2 = randomNumber();
  let roll3 = randomNumber();
  output.textContent = `You rolled a ${roll1},  ${roll2} and a ${roll3}. Total: ${roll1 + roll2 + roll3}`;
});

//Roll Four Button Click Event
btnFour.addEventListener("click", () => {
  let roll1 = randomNumber();
  let roll2 = randomNumber();
  let roll3 = randomNumber();
  let roll4 = randomNumber();
  output.textContent = `You rolled a ${roll1},  ${roll2},  ${roll3} and a ${roll4}. Total: ${roll1 + roll2 + roll3 + roll4}`;
});

//Roll Five Button Click Event
btnFive.addEventListener("click", () => {
  let roll1 = randomNumber();
  let roll2 = randomNumber();
  let roll3 = randomNumber();
  let roll4 = randomNumber();
  let roll5 = randomNumber();
  output.textContent = `You rolled a ${roll1},  ${roll2},  ${roll3},  ${roll4} and a ${roll5}. Total: ${roll1 + roll2 + roll3 + roll4 + roll5}`;
});

//Roll Six Button Click Event
btnSix.addEventListener("click", () => {
  let roll1 = randomNumber();
  let roll2 = randomNumber();
  let roll3 = randomNumber();
  let roll4 = randomNumber();
  let roll5 = randomNumber();
  let roll6 = randomNumber();
  output.textContent = `You rolled a ${roll1},  ${roll2},  ${roll3},  ${roll4},  ${roll5} and a ${roll6}. Total: ${roll1 + roll2 + roll3 + roll4 + roll5 + roll6}`;
});



