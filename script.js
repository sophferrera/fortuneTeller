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
  var fortunes = ["You will become a substitute teacher for a fourth grade class and teach them how to rock", "You will elaborately dress like a nanny to spend more time with your children after your messy divorce", "You will meet your twin at summer camp and decide to trade places so you can get your parents back together", "You will go to France to look for, find, and kill your daughters kidnappers", "You will become an FBI agent and aid in capturing of Buffalo Bill", "You will become the founder of the most popular social media platform ever created but everyone hates you and you have no friends", "You will fall in love with your AI with Scarlett Johansson's voice but realize polyamory is not for you", "You will be cast as the swan queen but you will let Mila Kunis get to your head so you die"]
  var randomFortune = Math.floor(Math.random() * fortunes.length)
  var fortuneInputText = fortuneInput.value;
  fortuneOutput.innerHTML = fortuneInputText + ": " + fortunes[randomFortune];

}

function restyle() {
  fortuneOutput.style.color = ("#FAB60D");
  fortuneButton.style.backgroundColor = ("#CC442E");
  halfButton.style.backgroundColor = ("#CC442E");
  fortuneOutput.style.textAlign = ("center");

}

restyle();
