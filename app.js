var first = document.getElementById('Bag');
var second = document.getElementById('Banana');
var third = document.getElementById('WineGlass');

first.addEventListener('click', handleClickOnBag);
second.addEventListener('click', handleClickOnBanana);
third.addEventListener('click', handleClickOnWineGlass);

var firstClicks = 0;
var secondClicks = 0;
var thirdClicks = 0;

function handleClickOnFirst() {
  firstClicks++;
  first.textContent = 'Bag was clicked ' + firstClicks + ' times';
  if (firstClicks % 3 === 0) {
    first.textContent = 'I AM DIVISIBLE BY 3!';
  }
}

function handleClickOnSecond() {
  secondClicks += 1;
  second.textContent = 'Banana was clicked ' + secondClicks + ' times';
}

function handleClickOnThird() {
  thirdClicks += 1;
  third.textContent = 'WineGlass was clicked ' + thirdClicks + ' times';
