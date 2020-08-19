'use strict'

var productArray = [];
var uniqueProductArray = [];
var parentElement = document.getElementById('productTest')
var results = document.getElementById('results')
var totalClicks = 0;

function Product (name, filepath) {
  this.name=name;
  this.filepath=filepath;
  productArray.push(this);
}

new Product('bag', '../images/bag.jpg')
new Product('banana', '../images/banana.jpg')
new Product('bathroom', '../images/bathroom.jpg')
new Product('boots', '../images/boots.jpg')
new Product('breakfast', '../images/breakfast.jpg')
new Product('bubblegum', '../images/bubblegum.jpg')
new Product('chair', '../images/chair.jpg')
new Product('cthulhu', '../images/cthulhu.jpg')
new Product('dog-duck', '../images/dog-duck.jpg')
new Product('dragon', '../images/dragon.jpg')
new Product('pen', '../images/pen.jpg')
new Product('pet-sweep', '../images/pet-sweep.jpg')
new Product('scissors', '../images/scissors.jpg')
new Product('shark', '../images/shark.jpg')
new Product('sweep', '../images/sweep.png')
new Product('tauntaun', '../images/tauntaun.jpg')
new Product('unicorn', '../images/unicorn.jpg')
new Product('usb', '../images/usb.gif')
new Product('water-can', '../images/water-can.jpg')
new Product('wine-glass', '../images/wine-glass.jpg')
console.log(productArray)


function generateRandomImage(){
  var randomImage = getRandomNumber(productArray.length);
  var chosenImage = productArray[randomImage];
  var image = document.createElement('img');
  image.setAttribute('src', chosenImage.filepath);
  image.setAttribute('alt', chosenImage.name);
  image.setAttribute('title', chosenImage.name);
  parentElement.appendChild(image)
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function handleClick(event){
  totalClicks++;
  var event = event.target.value

  for(var i=0; i<productArray.length; i++){
    if(event===productArray[i].event){
      productArray[i].totalClicks++
    }
  }
  parentElement.innerHTML='';
  generateRandomImage();
  generateRandomImage();
  generateRandomImage();
  if(totalClicks>=25){
    parentElement.removeEventListener('click', handleClick);
  }
}

parentElement.addEventListener('click', handleClick);

generateRandomImage()
generateRandomImage()
generateRandomImage()