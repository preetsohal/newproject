var imagesArray =[];

function Images(name, fileLoc) {
   this.name = name;
   this.fileLoc = fileLoc;
   this.counter = 0;
   imagesArray.push(this);
}

function randomNumber(){
  return Math.floor((Math.random() * imagesArray.length));
}

var bag = new Images('bag','project/bag.jpg');
var banana = new Images('banana','project/banana.jpg');
var boots = new Images('boots','project/boots.jpg');
var chair = new Images('chair','project/chair.jpg');
var cthulhu = new Images('cthulhu','project/cthulhu.jpg');
var dragon = new Images('dragon','project/dragon.jpg');
var pen = new Images('pent','project/pen.jpg');
var scissors = new Images('scissors','project/scissors.jpg');
var shark = new Images('shark','project/shark.jpg');
var sweep = new Images('sweep','project/sweep.jpg');
var unicorn = new Images('unicorn','project/unicorn.jpg');
var usb = new Images('usb','project/usb.jpg');
var water_can = new Images('water-can','project/water-can.jpg');
var wine_glass = new Images('wine-glass','project/wine-glass.jpg');

 var img1 = document.getElementById('first');
 var img2 = document.getElementById('second');
 var img3 = document.getElementById('third');

 var rand1;
 var rand2;
 var rand3;

function random(){
  rand1 = randomNumber();
  img1.src = imagesArray[rand1].fileLoc;

  rand2 = randomNumber();
  while (rand1 === rand2){
    rand2 = randomNumber();
  }
  img2.src = imagesArray[rand2].fileLoc;

  rand3 = randomNumber();
  while (rand1 === rand3 || rand2 === rand3) {
    rand3 = randomNumber();
  }
  img3.src = imagesArray[rand3].fileLoc;
}
random();


img1.addEventListener('click', handleClickOnFirst);
img2.addEventListener('click', handleClickOnSecond);
img3.addEventListener('click', handleClickOnThird);

function handleClickOnFirst() {
  imagesArray[rand1].counter++;
  console.log(imagesArray[rand1].counter);
  random();
  }


function handleClickOnSecond() {
  imagesArray[rand2].counter++;
  console.log(imagesArray[rand2].counter);
  random();
}

function handleClickOnThird() {
  imagesArray[rand3].counter++;
  console.log(imagesArray[rand3].counter);
  random();
}
