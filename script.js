var halfInput = document.getElementById("half-input");
var halfButton = document.getElementById("half-button");
var fortuneInput = document.getElementById("fortune-input");
var fortuneButton = document.getElementById("fortune-button");
var fortuneOutput = document.getElementById("fortune-output");

halfButton.addEventListener("click", halfNumber);

function halfNumber() {
  var halfInputText = halfInput.value;
  var halfInputNumber = parseFloat(halfInputText);
  console.log("Half of " + halfInputText + " is " + (halfInputText / 2));
  alert(halfInputNumber / 2);
}

fortuneButton.addEventListener("click", fortune);

function fortune() {
  var fortunes = ["There's a She Wolf in the closet. Open up and set her free.", "Sometimes love comes around and it knocks you down. Just get back up when it knocks you down, knocks you down", "Just dance, gonna be okay, da da doo-doo-mmm. Just dance, spin that record, babe, da da doo-doo-mmm", "You a mom and pop, I'm a corporation, I'm the press conference, you're a conversation ah ooh oh oh"]
  var randomFortune = Math.floor(Math.random() * fortunes.length)
  var fortuneInputText = fortuneInput.value;
  fortuneOutput.innerHTML = fortuneInputText + ": " + fortunes[randomFortune];

}

function relstyle() {
  fortuneOutput.style.color = ("#FAB60D");
  fortuneButton.style.backgroundColor = ("#CC442E");
  halfButton.style.backgroundColor = ("#CC442E");
  fortuneOutput.style.textAlign = ("center");

}

relstyle();
