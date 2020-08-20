'use strict'

var productArray = [];
var uniqueProductArray = [];
var parentElement = document.getElementById('productTest');
var results = document.getElementById('results');
var button = document.getElementById('input');
var totalClicks = 0;
var maxClicks = 3;

function Product (name, filepath) {
  this.name=name;
  this.filepath=filepath;
  productArray.push(this);
  this.clicks = 0;
  this.shown = 0;
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


function generateRandomImage(){
  var randomImage = getRandomNumber(productArray.length);

  while(uniqueProductArray.includes(randomImage)){
    randomImage = getRandomNumber(productArray.length);
  }
  uniqueProductArray.push(randomImage);
  var chosenImage = productArray[randomImage];
  chosenImage.shown++;

  if(uniqueProductArray.length>6){
    uniqueProductArray.shift();
  }
  buildImage(chosenImage)
}

function buildImage(chosenImage){
  var image = document.createElement('img');
  image.setAttribute('src', chosenImage.filepath);
  image.setAttribute('alt', chosenImage.name);
  image.setAttribute('title', chosenImage.name);
  
  var radioButton = document.createElement('input');
  radioButton.setAttribute('type', 'radio');
  radioButton.setAttribute('name', 'sameName');
  radioButton.setAttribute('alt', chosenImage.name)
  radioButton.setAttribute('src', chosenImage.filepath);
  parentElement.appendChild(radioButton);
  parentElement.appendChild(image);

}

function handleClick(event){
  event.preventDefault();
  totalClicks++

  var name = event.target.value;
  for(var i=0;i<productArray.length;i++){
    if(name === productArray[i].name){
      productArray[i].clicks++;
    }
  }

  parentElement.innerHTML='';
  generateRandomImage();
  generateRandomImage();
  generateRandomImage();
  if(totalClicks>=maxClicks){
    parentElement.removeEventListener('click', handleClick);
    parentElement.innerHTML='';
    button.innerHTML='';
    generateResults();
  }
}

function generateResults(){
  for(var i=0;i<productArray.length;i++) {
    var li = document.createElement('li');
    li.textContent = `${productArray[i].name} had ${productArray[i].clicks} votes and was shown ${productArray[i].shown} times.`
    results.appendChild(li)
  }
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

document.getElementById('input').addEventListener('click', handleClick)

generateRandomImage()
generateRandomImage()
generateRandomImage()
